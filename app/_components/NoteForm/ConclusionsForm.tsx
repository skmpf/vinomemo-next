"use client";

import { INote } from "@/_modules/note";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Field, FormikErrors, FormikTouched, getIn } from "formik";
import { FormContainer } from "@/_components/NoteForm/FormContainer";

interface FormFieldsContainerProps {
  errors: FormikErrors<INote>;
  touched: FormikTouched<INote>;
}

export const ConclusionsForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  return (
    <FormContainer title="Conclusions">
      <FormControl
        isInvalid={
          !!getIn(errors, "conclusions.quality") &&
          getIn(touched, "conclusions.quality")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Quality
          </FormLabel>
          <Field
            as={Select}
            name="conclusions.quality"
            placeholder="Select an option"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          >
            <option value="poor">Poor</option>
            <option value="acceptable">Acceptable</option>
            <option value="good">Good</option>
            <option value="very good">Very Good</option>
            <option value="outstanding">Outstanding</option>
          </Field>
        </Flex>
        <FormErrorMessage>
          {getIn(errors, "conclusions.quality")}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "conclusions.comments") &&
          getIn(touched, "conclusions.comments")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          my={3}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Comments
          </FormLabel>
          <Field
            as={Textarea}
            name="conclusions.comments"
            placeholder="Something to add?"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>
          {getIn(errors, "conclusions.comments")}
        </FormErrorMessage>
      </FormControl>
    </FormContainer>
  );
};
