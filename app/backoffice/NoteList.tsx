import { Dispatch, SetStateAction, useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Flex,
  CardFooter,
  HStack,
  Button,
  CardHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
  Link,
} from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import { INote } from "@/_modules/note";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const NoteList: React.FC<{
  notes: INote[] | [];
  setNotes: Dispatch<SetStateAction<INote[] | []>>;
}> = ({ notes, setNotes }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNoteId, setSelectedNoteId] = useState<string>("");

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
      console.log(error);
    }
  };

  const handleClick = async (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setSelectedNoteId(id);
    onOpen();
  };

  const handleDelete = async () => {
    try {
      await deleteNote(selectedNoteId);
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem deleting your note, please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setNotes([]);
      setSelectedNoteId("");
      onClose();
    }
  };

  return (
    <>
      {notes.map((note: INote) => (
        <Card key={note._id} mb={3}>
          <CardHeader>
            <Text fontSize="xl">Note</Text>
          </CardHeader>
          <CardBody>
            <Text color="gray.600">id: {note?._id}</Text>
            <Text color="gray.600">name: {note?.information.name}</Text>
            <Text color="gray.600">createdAt: {note?.createdAt}</Text>
            <Text color="gray.600">updatedAt: {note?.updatedAt}</Text>
            <Text color="gray.600">creatorId: {note?.creator}</Text>
          </CardBody>
          <CardFooter>
            <Flex width="100%" justifyContent="flex-end">
              <HStack>
                <Button onClick={(event) => handleClick(event, note._id)}>
                  Delete
                </Button>
                <Button as={Link} href={`/backoffice/note/${note._id}`}>
                  Edit
                </Button>
              </HStack>
            </Flex>
          </CardFooter>
        </Card>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="brand.900" />
          <ModalHeader color="brand.900">Warning</ModalHeader>
          <ModalBody>
            <Text color="gray.700">
              Are you sure you want to delete this note?
            </Text>
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
