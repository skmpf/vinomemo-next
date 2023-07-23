"use client";

import { Heading, VStack } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

export const FormContainer: React.FC<ContainerProps> = ({
  children,
  title,
}) => {
  return (
    <VStack spacing={4} margin="auto" width="100%" mb={14}>
      <Heading as="h2" size="md">
        {title}
      </Heading>
      {children}
    </VStack>
  );
};
