"use client";

import { INote } from "@/app/_modules/note";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { FormikErrors, FormikTouched, getIn } from "formik";
import { FormContainer } from "./FormContainer";
import { ColorSelect } from "./elements/ColorSelect";
import { ScaleRadio } from "./elements/ScaleRadio";

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
      <FormControl
        isInvalid={
          !!getIn(errors, "appearance.intensity") &&
          getIn(touched, "appearance.intensity")
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
            name="appearance.intensity"
            options={["light", "medium", "pronounced"]}
          />
        </Flex>
      </FormControl>
      <FormControl isInvalid={!!colorError && colorTouched}>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          my={3}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Colour
          </FormLabel>
          <ColorSelect />
        </Flex>
        <FormErrorMessage>{colorError}</FormErrorMessage>
      </FormControl>
    </FormContainer>
  );
};
