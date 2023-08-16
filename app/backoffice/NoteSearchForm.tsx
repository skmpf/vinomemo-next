import { Dispatch, SetStateAction } from "react";
import { Formik, Form } from "formik";
import {
  Button,
  Input,
  VStack,
  RadioGroup,
  Radio,
  HStack,
  FormControl,
  FormErrorMessage,
  useToast,
  Box,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { INote } from "@/_modules/note";
import api from "@/_modules/api";

const validationSchema = Yup.object().shape({
  searchType: Yup.string().required("Please select a search type"),
  searchValue: Yup.string().required("Required"),
});

const NoteSearchForm = ({
  setNotes,
}: {
  setNotes: Dispatch<SetStateAction<INote[] | []>>;
}) => {
  const toast = useToast();

  const handleSearch = async (values: any) => {
    try {
      setNotes([]);
      const { searchType: type, searchValue: query } = values;

      let data;
      switch (type) {
        case "id":
          const noteById = await api.getNoteById(query);
          data = noteById && [noteById];
          break;
        case "user":
          const notesByUser = await api.getNotesByUserId(query);
          data = notesByUser;
          break;
        case "name":
          const notesByName = await api.getNotesByName(query);
          data = notesByName;
          break;
        default:
          break;
      }

      if (!data || data.length === 0) {
        toast({
          title: "No note found",
          description: "Please try another search",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else {
        setNotes(data as INote[] | []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box pb={5}>
      <Formik
        initialValues={{ searchType: "id", searchValue: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSearch}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={!!errors.searchValue && touched.searchValue}
              >
                <Input
                  name="searchValue"
                  placeholder="Enter search..."
                  value={values.searchValue}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.searchValue}</FormErrorMessage>
              </FormControl>
              <RadioGroup
                name="searchType"
                value={values.searchType}
                onChange={(value) => setFieldValue("searchType", value)}
              >
                <HStack spacing={3} alignItems="flex-start">
                  <Radio value="id">By ID</Radio>
                  <Radio value="user">By User ID</Radio>
                  <Radio value="name">By Name</Radio>
                </HStack>
              </RadioGroup>
              <Button type="submit">Search</Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NoteSearchForm;
