"use client";

import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { INote } from "@/_modules/note";

type NoteCardProps = {
  note: INote;
};

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();

  const deleteNote = async (id: string) => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error deleting note");
      return await res.json();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "There was a problem deleting your note, please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    onOpen();
  };

  const handleDelete = async () => {
    await deleteNote(note._id as string);
    onClose();
    router.refresh();
  };

  return (
    <>
      <Card as={Link} href={`/notes/${note._id}`}>
        <CardBody>
          <Flex justifyContent="space-between">
            <Text textTransform="uppercase" fontWeight={700} color="black">
              {note.information.name}
            </Text>
            <Button size="sm" onClick={(e) => handleClick(e)}>
              <DeleteIcon />
            </Button>
          </Flex>
          <HStack>
            <Icon as={MdLocationOn} color="brand.900" />
            <Text fontSize="sm" color="gray.600">
              {note.information.region || "-"}
            </Text>
          </HStack>
          <HStack>
            <Icon as={StarIcon} color="brand.900" />
            <Text fontSize="sm" color="gray.600" textTransform="capitalize">
              {note.conclusions?.quality || "-"}
            </Text>
          </HStack>
          <Text fontSize="xs" color="gray.600">
            Added on {new Date(note.createdAt!).toLocaleString()}
          </Text>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="brand.900" />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Text>Are you sure you want to delete this note?</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="brand.900" onClick={handleDelete}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
