"use client";

import { useState } from "react";
import { Button, Flex, HStack, Link, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  INote,
  NoteFormInitialValues,
  NoteFormValidationSchema,
} from "@/app/_modules/note";
import { LookForm } from "./_components/LookForm";
import { LabelForm } from "./_components/LabelForm";

export const NoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: INote) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Flex direction="column" width="100%" maxWidth="2xl">
      <Formik
        initialValues={NoteFormInitialValues}
        validationSchema={NoteFormValidationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          !isLoading && handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <HStack justifyContent="flex-end">
              <Button type="submit" isDisabled={isLoading}>
                {isLoading ? <Spinner /> : "Save"}
              </Button>
              <Button as={Link} href="/notes">
                Close
              </Button>
            </HStack>
            <LabelForm errors={errors} touched={touched} />
            <LookForm errors={errors} touched={touched} />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
