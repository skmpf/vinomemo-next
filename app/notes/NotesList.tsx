"use client";

import Link from "next/link";
import { Button, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { NoteCard } from "@/notes/NoteCard";
import { INote } from "@/_modules/note";

export const NotesList = ({ notes }: { notes: INote[] | undefined }) => {
  if (!notes) return null;
  return (
    <Flex direction="column" width="100%" maxWidth="2xl">
      <HStack justifyContent="space-between" mb={4}>
        <Heading as="h2" size="md">
          My notes
        </Heading>
        <Button as={Link} href="/notes/create">
          <AddIcon />
        </Button>
      </HStack>
      <Stack spacing={4}>
        {notes.length === 0 ? (
          <Text>
            You don&apos;t have any note yet, create one by clicking on the +
            button!
          </Text>
        ) : (
          notes.map((note) => <NoteCard key={note._id} note={note} />)
        )}
      </Stack>
    </Flex>
  );
};
