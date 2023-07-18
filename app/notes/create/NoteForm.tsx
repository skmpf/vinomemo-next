"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Flex, HStack, Link, Spinner } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { getCookie } from "cookies-next";
import {
  INote,
  NoteFormInitialValues,
  NoteFormValidationSchema,
} from "@/app/_modules/note";
import { AppearanceForm } from "./_components/AppearanceForm";
import { InformationForm } from "./_components/InformationForm";
import { NoseForm } from "./_components/NoseForm";
import { PalateForm } from "./_components/PalateForm";
import { ConclusionsForm } from "./_components/ConclusionsForm";

export const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const NoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: INote) => {
    if (!isLoading) {
      setIsLoading(true);
      const token = getCookie("jwt");
      const response = await fetch(`${VINOMEMO_API_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        router.push("/notes");
      }
      setIsLoading(false);
    }
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
            <InformationForm errors={errors} touched={touched} />
            <AppearanceForm errors={errors} touched={touched} />
            <NoseForm errors={errors} touched={touched} />
            <PalateForm errors={errors} touched={touched} />
            <ConclusionsForm errors={errors} touched={touched} />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
