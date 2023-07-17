"use client";

import Link from "next/link";
import { Card, CardBody, HStack, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { INote } from "../_modules/note";

type NoteCardProps = {
  note: INote;
};

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <Card as={Link} href={`/notes/${note._id}`}>
      <CardBody>
        <Text textTransform="uppercase" fontWeight={700} color="black">
          {note.information.name}
        </Text>
        <HStack>
          <Icon as={MdLocationOn} color="brand.900" />
          <Text fontSize="sm" color="gray.600">
            {note.information.region || "-"}
          </Text>
        </HStack>
        <HStack>
          <Icon as={StarIcon} color="brand.900" />
          <Text fontSize="sm" color="gray.600">
            {note.conclusions?.quality || "-"}
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          Added on {new Date(note.createdAt!).toLocaleString()}
        </Text>
      </CardBody>
    </Card>
  );
};
