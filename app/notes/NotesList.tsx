"use client";

import Link from "next/link";
import { Button, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import { NoteCard } from "../_components/Note/NoteCard";

export const NotesList = () => {
  return (
    <Flex direction="column" width="100%" maxWidth="2xl">
      <HStack justifyContent="space-between" mb={4}>
        <Heading as="h2" size="md">
          My notes
        </Heading>
        <Button as={Link} href="/notes/create" size="lg">
          Add
        </Button>
      </HStack>
      <Stack spacing={4}>
        <NoteCard />
        <NoteCard />
      </Stack>
    </Flex>
  );
};
