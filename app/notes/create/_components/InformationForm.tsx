"use client";

import { INote } from "@/app/_modules/note";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, FormikErrors, FormikTouched } from "formik";
import { FormContainer } from "./FormContainer";

interface FormFieldsContainerProps {
  errors: FormikErrors<INote>;
  touched: FormikTouched<INote>;
}

export const InformationForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  return (
    <FormContainer title="Information">
      <FormControl
        isInvalid={!!errors.information?.name && touched.information?.name}
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Name
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="name"
            name="information.name"
            type="text"
            focusBorderColor="gray.400"
            errorBorderColor="brand.900"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.name}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.country && touched.information?.country
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Country
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="country"
            name="information.country"
            type="text"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.country}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!!errors.information?.region && touched.information?.region}
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Region
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="region"
            name="information.region"
            type="text"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.region}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={!!errors.information?.grapes && touched.information?.grapes}
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Grapes
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="grapes"
            name="information.grapes"
            type="text"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.grapes}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.producer && touched.information?.producer
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Producer
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="producer"
            name="information.producer"
            type="text"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.producer}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.vintage && touched.information?.vintage
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Vintage
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="vintage"
            name="information.vintage"
            type="number"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.vintage}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.alcohol && touched.information?.alcohol
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            ABV
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="alcohol"
            name="information.alcohol"
            type="number"
            focusBorderColor="gray.400"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{errors.information?.alcohol}</FormErrorMessage>
      </FormControl>
    </FormContainer>
  );
};
