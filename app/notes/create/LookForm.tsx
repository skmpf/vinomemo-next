"use client";

import { INote } from "@/app/_modules/note";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { FormikErrors, FormikTouched, getIn } from "formik";
import { FormContainer } from "./FormContainer";
import { ColorSelect } from "./ColorSelect";

interface FormFieldsContainerProps {
  errors: FormikErrors<INote>;
  touched: FormikTouched<INote>;
}

export const LookForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  const colorError =
    getIn(errors, "appearance.color.main") &&
    getIn(errors, "appearance.color.variants");
  const colorTouched =
    getIn(touched, "appearance.color.main") &&
    getIn(touched, "appearance.color.variants");

  return (
    <FormContainer title="Observe wine in your glass">
      <FormControl isInvalid={!!colorError && colorTouched}>
        <HStack justifyContent="space-between" height={28} my={3}>
          <FormLabel htmlFor="text" color="brand.900">
            Colour
          </FormLabel>
          <ColorSelect />
        </HStack>
        <FormErrorMessage>{colorError}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "appearance.color.intensity") &&
          getIn(touched, "appearance.intensity")
        }
      >
        <HStack justifyContent="space-between">
          <FormLabel htmlFor="text" color="brand.900">
            Intensity
          </FormLabel>
        </HStack>
      </FormControl>
    </FormContainer>
  );
};
