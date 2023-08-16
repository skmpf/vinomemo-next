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
import { getCookie } from "cookies-next";
import { IUser } from "@/_modules/user";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

const validationSchema = Yup.object().shape({
  searchType: Yup.string().required("Please select a search type"),
  searchValue: Yup.string().required("Required"),
});

const getUsers = async (query: string, type: string) => {
  try {
    const token = getCookie("jwt");
    if (!token) throw new Error("No token found");
    const res = await fetch(
      `${VINOMEMO_API_URL}/users/search?${type}=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) throw new Error("Error fetching user");
    return (await res.json()) as IUser[] | [];
  } catch (error) {
    console.error(error);
  }
};

const UserSearchForm = ({
  setUsers,
}: {
  setUsers: Dispatch<SetStateAction<IUser[] | []>>;
}) => {
  const toast = useToast();

  const handleSearch = async (values: any) => {
    setUsers([]);
    const { searchType: type, searchValue: query } = values;
    const users = await getUsers(query, type);
    if (!users || users.length === 0) {
      toast({
        title: "No user found",
        description: "Please try another search",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      setUsers(users);
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
                  <Radio value="email">By Email</Radio>
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

export default UserSearchForm;
