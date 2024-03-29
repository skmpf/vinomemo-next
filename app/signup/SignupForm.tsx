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
import { useSignup } from "@/_hooks/useSignup";
import { IUser, UserFormInitialValues, UserFormValues } from "@/_modules/user";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import api from "@/_modules/api";

export const SignupForm = ({ user }: { user?: IUser | null }) => {
  const { isLoading, signupUser } = useSignup();
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleSubmit = async (values: UserFormValues) => {
    if (!isLoading && !isUpdateLoading) {
      if (pathname.includes("/backoffice")) {
        setIsUpdateLoading(true);
        await api.updateUser({
          id: params.id as string,
          name: values.name,
          password: values.password,
          email: values.email,
        });
        setIsUpdateLoading(false);
        router.back();
      } else {
        signupUser(values.name, values.password, values.email);
      }
    }
  };

  return (
    <Formik
      initialValues={
        user ? { ...UserFormInitialValues, ...user } : UserFormInitialValues
      }
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Field must not be empty."),
        email: Yup.string()
          .email("Email address format is not valid.")
          .required("Field must not be empty."),
        password: Yup.string()
          .min(8, "Password must contain 8 characters or more.")
          .max(20, "Password must contain 20 characters or less.")
          .required("Field must not be empty."),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password")], "Both passwords must match")
          .required("Field must not be empty."),
      })}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => handleSubmit(values)}
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
                focusBorderColor="gray.400"
                errorBorderColor="brand.900"
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
                focusBorderColor="gray.400"
                errorBorderColor="brand.900"
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
                focusBorderColor="gray.400"
                errorBorderColor="brand.900"
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
                focusBorderColor="gray.400"
                errorBorderColor="brand.900"
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
              {isLoading ? (
                <Spinner />
              ) : pathname.includes("/backoffice") ? (
                "Save"
              ) : (
                "Sign up"
              )}
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};
