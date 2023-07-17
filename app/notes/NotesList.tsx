"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Flex,
  HStack,
  Heading,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { NoteCard } from "./NoteCard";
import { VINOMEMO_API_URL } from "../_utils/authentication";
import { INote } from "../_modules/note";

type DecodedToken = {
  user: {
    _id: string;
  };
};

export const NotesList = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const token = getCookie("jwt");
        if (!token) {
          throw new Error("Token not found");
        }
        const decoded: DecodedToken = jwt_decode(token as string);
        const userId = decoded?.user._id;

        const res = await fetch(`${VINOMEMO_API_URL}/users/${userId}/notes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Error fetching notes");
        const notes: INote[] = await res.json();
        setNotes(notes);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description:
            "There was a problem getting your notes, please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    getNotes();
  }, [toast]);

  if (isLoading) return <Spinner size="xl" thickness="4px" color="brand.900" />;

  return (
    <Flex direction="column" width="100%" maxWidth="2xl">
      <HStack justifyContent="space-between" mb={4}>
        <Heading as="h2" size="md">
          My notes
        </Heading>
        <Button as={Link} href="/notes/create">
          Add
        </Button>
      </HStack>
      <Stack spacing={4} verticalAlign="">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} />
        ))}
      </Stack>
    </Flex>
  );
};
