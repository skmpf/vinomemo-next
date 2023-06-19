"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Spinner,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
  const { isLoading, error, loginUser } = useLogin();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("The format of your email address is not valid.")
          .required("Field must not be empty."),
        password: Yup.string()
          .min(8, "Your password must contain 8 characters or more.")
          .max(20, "Your password must contain 20 characters or less.")
          .required("Field must not be empty."),
      })}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={(values) => {
        loginUser(values.email, values.password);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <VStack spacing={4} width="100%" maxW={96} my={6}>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email" color="brand.900">
                Email
              </FormLabel>
              <Field
                as={Input}
                variant="flushed"
                id="email"
                name="email"
                type="email"
              />
              {!errors.email ? (
                <FormHelperText minH={3.5}></FormHelperText>
              ) : (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password" color="brand.900">
                Password
              </FormLabel>
              <Field
                as={Input}
                variant="flushed"
                id="password"
                name="password"
                type="password"
              />
              {!errors.password ? (
                <FormHelperText minH={3.5}></FormHelperText>
              ) : (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type="submit"
              width="full"
              textTransform="uppercase"
              isDisabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Log in"}
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};