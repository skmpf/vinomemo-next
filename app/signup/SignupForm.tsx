"use client";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useSignup } from "../hooks/useSignup";

export const SignupForm = () => {
  const { isLoading, error, signupUser } = useSignup();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Field must not be empty."),
        email: Yup.string()
          .email("The format of your email address is not valid.")
          .required("Field must not be empty."),
        password: Yup.string()
          .min(8, "Your password must contain 8 characters or more.")
          .max(20, "Your password must contain 20 characters or less.")
          .required("Field must not be empty."),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password")], "Your password must match")
          .required("Field must not be empty."),
      })}
      validateOnBlur={true}
      validateOnChange={false}
      onSubmit={(values) => {
        !signupUser(values.name, values.password, values.email);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <VStack spacing={4} width="100%" maxW={96} my={6}>
            <FormControl isInvalid={!!errors.name && touched.name}>
              <FormLabel htmlFor="email" color="brand.900">
                Name
              </FormLabel>
              <Field
                as={Input}
                variant="flushed"
                id="name"
                name="name"
                type="text"
              />
              {!errors.name ? (
                <FormHelperText minH={3.5}></FormHelperText>
              ) : (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              )}
            </FormControl>
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
            <FormControl
              isInvalid={!!errors.passwordConfirm && touched.passwordConfirm}
            >
              <FormLabel htmlFor="password" color="brand.900">
                Confirm password
              </FormLabel>
              <Field
                as={Input}
                variant="flushed"
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
              />
              {!errors.passwordConfirm ? (
                <FormHelperText minH={3.5}></FormHelperText>
              ) : (
                <FormErrorMessage>{errors.passwordConfirm}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type="submit"
              width="full"
              textTransform="uppercase"
              isDisabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Sign up"}
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};
