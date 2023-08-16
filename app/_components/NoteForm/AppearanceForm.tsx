"use client";

import { INote } from "@/_modules/note";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { FormikErrors, FormikTouched, getIn, useFormikContext } from "formik";
import { FormContainer } from "@/_components/NoteForm/FormContainer";
import { ColorPicker } from "@/_components/NoteForm/elements/ColorPicker";
import { ScaleRadio } from "@/_components/NoteForm/elements/ScaleRadio";

interface FormFieldsContainerProps {
  errors: FormikErrors<INote>;
  touched: FormikTouched<INote>;
}

export const AppearanceForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  const { values } = useFormikContext<INote>();
  const colorError =
    getIn(errors, "appearance.color.main") &&
    getIn(errors, "appearance.color.variants");
  const colorTouched =
    getIn(touched, "appearance.color.main") &&
    getIn(touched, "appearance.color.variants");

  return (
    <FormContainer title="Appearance">
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
            value={values.appearance.intensity}
          />
          <FormErrorMessage>
            {getIn(errors, "appearance.intensity")}
          </FormErrorMessage>
        </Flex>
      </FormControl>
      <FormControl isInvalid={!!colorError && colorTouched}>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          my={3}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Color
          </FormLabel>
          <ColorPicker value={values.appearance} />
        </Flex>
        <FormErrorMessage>{colorError}</FormErrorMessage>
      </FormControl>
    </FormContainer>
  );
};
