"use client";

import { Container, Spinner, VStack } from "@chakra-ui/react";
import {
  TitleDescription,
  TitleDescriptionProps,
} from "./elements/TitleDescription";

export type LoadableLayout = {
  isLoading?: boolean;
};

export const UserLayout: React.FC<
  {
    children?: React.ReactNode;
  } & Partial<TitleDescriptionProps> &
    LoadableLayout
> = ({ children, title, detail, isLoading }) => {
  return (
    <Container
      maxWidth="container.lg"
      px={6}
      display="flex"
      flexDirection="column"
    >
      <VStack mx={4} my={8}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {!!title && (
              <TitleDescription
                title={title}
                detail={detail}
                alignItems="center"
              />
            )}
            {children}
          </>
        )}
      </VStack>
    </Container>
  );
};
