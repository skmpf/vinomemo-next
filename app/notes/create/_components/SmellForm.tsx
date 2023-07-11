"use client";

import { INote } from "@/app/_modules/note";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, FormikErrors, FormikTouched, getIn } from "formik";
import { FormContainer } from "./FormContainer";
import { ScaleRadio } from "./elements/ScaleRadio";

interface FormFieldsContainerProps {
  errors: FormikErrors<INote>;
  touched: FormikTouched<INote>;
}

export const SmellForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  return (
    <FormContainer title="Identify five unique aromas in your wine">
      <FormControl
        isInvalid={
          !!getIn(errors, "nose.intensity") && getIn(touched, "nose.intensity")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Intensity
          </FormLabel>
          <ScaleRadio
            name="nose.intensity"
            options={["light", "medium", "pronounced"]}
          />
        </Flex>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "nose.aromas") && getIn(touched, "nose.aromas")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          my={3}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Aroma characteristics
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="name"
            name="nose.aromas"
            type="text"
            focusBorderColor="gray.400"
            errorBorderColor="brand.900"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "nose.aromas")}</FormErrorMessage>
      </FormControl>
    </FormContainer>
  );
};
