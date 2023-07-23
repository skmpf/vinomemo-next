"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Flex,
  HStack,
  Link,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import {
  INote,
  NoteFormInitialValues,
  NoteFormValidationSchema,
  NoteFormValues,
} from "@/app/_modules/note";
import { AppearanceForm } from "./AppearanceForm";
import { InformationForm } from "./InformationForm";
import { NoseForm } from "./NoseForm";
import { PalateForm } from "./PalateForm";
import { ConclusionsForm } from "./ConclusionsForm";
import { getCookie } from "cookies-next";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const NoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const createNote = async (note: NoteFormValues) => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(note),
      });
      if (!res.ok) throw new Error("Error creating note");
      return (await res.json()) as INote;
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "There was a problem creating your note, please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSubmit = async (values: NoteFormValues) => {
    if (!isLoading) {
      setIsLoading(true);
      const note = await createNote(values);
      note && router.push("/notes");
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
