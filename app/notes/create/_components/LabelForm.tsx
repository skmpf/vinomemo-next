"use client";

import { INote } from "@/app/_modules/note";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { Field, FormikErrors, FormikTouched } from "formik";
import { FormContainer } from "./FormContainer";

interface FormFieldsContainerProps {
  errors: FormikErrors<INote>;
  touched: FormikTouched<INote>;
}

export const LabelForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  return (
    <FormContainer title="From the label">
      <FormControl
        isInvalid={!!errors.information?.name && touched.information?.name}
      >
        <HStack justifyContent="space-between">
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
            width="75%"
          />
        </HStack>
        <FormErrorMessage>{errors.information?.name}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.country && touched.information?.country
        }
      >
        <HStack justifyContent="space-between">
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
            width="75%"
          />
        </HStack>
      </FormControl>
      <FormControl
        isInvalid={!!errors.information?.region && touched.information?.region}
      >
        <HStack justifyContent="space-between">
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
            width="75%"
          />
        </HStack>
      </FormControl>
      <FormControl
        isInvalid={!!errors.information?.grapes && touched.information?.grapes}
      >
        <HStack justifyContent="space-between">
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
            width="75%"
          />
        </HStack>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.producer && touched.information?.producer
        }
      >
        <HStack justifyContent="space-between">
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
            width="75%"
          />
        </HStack>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.vintage && touched.information?.vintage
        }
      >
        <HStack justifyContent="space-between">
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
            width="75%"
          />
        </HStack>
      </FormControl>
      <FormControl
        isInvalid={
          !!errors.information?.alcohol && touched.information?.alcohol
        }
      >
        <HStack justifyContent="space-between">
          <FormLabel htmlFor="text" color="brand.900">
            ABV
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="alcohol"
            name="information.alcohol"
            type="text"
            focusBorderColor="gray.400"
            width="75%"
          />
        </HStack>
      </FormControl>
    </FormContainer>
  );
};
