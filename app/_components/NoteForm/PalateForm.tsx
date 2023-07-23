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

export const PalateForm: React.FC<FormFieldsContainerProps> = ({
  errors,
  touched,
}) => {
  return (
    <FormContainer title="Palate">
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.sweetness") &&
          getIn(touched, "palate.sweetness")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Sweetness
          </FormLabel>
          <ScaleRadio
            name="palate.sweetness"
            options={["dry", "off-dry", "medium", "sweet"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.sweetness")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.acidity") && getIn(touched, "palate.acidity")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Acidity
          </FormLabel>
          <ScaleRadio
            name="palate.acidity"
            options={["low", "medium", "high"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.acidity")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.tannin") && getIn(touched, "palate.tannin")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Tannin
          </FormLabel>
          <ScaleRadio
            name="palate.tannin"
            options={["low", "medium", "high"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.tannin")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.alcohol") && getIn(touched, "palate.alcohol")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Alcohol
          </FormLabel>
          <ScaleRadio
            name="palate.alcohol"
            options={["low", "medium", "high"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.alcohol")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.body") && getIn(touched, "palate.body")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Body
          </FormLabel>
          <ScaleRadio
            name="palate.body"
            options={["light", "medium", "full"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.body")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.intensity") &&
          getIn(touched, "palate.intensity")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Flavor intensity
          </FormLabel>
          <ScaleRadio
            name="palate.intensity"
            options={["light", "medium", "pronounced"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.intensity")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.flavors") && getIn(touched, "palate.flavors")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          my={3}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Flavor characteristics
          </FormLabel>
          <Field
            as={Input}
            variant="flushed"
            id="name"
            name="palate.flavors"
            type="text"
            focusBorderColor="gray.400"
            errorBorderColor="brand.900"
            width={{ base: "100%", md: "75%" }}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.flavors")}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={
          !!getIn(errors, "palate.finish") && getIn(touched, "palate.finish")
        }
      >
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormLabel htmlFor="text" color="brand.900">
            Finish
          </FormLabel>
          <ScaleRadio
            name="palate.finish"
            options={["short", "medium", "long"]}
          />
        </Flex>
        <FormErrorMessage>{getIn(errors, "palate.finish")}</FormErrorMessage>
      </FormControl>
    </FormContainer>
  );
};
