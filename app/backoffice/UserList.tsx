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
import { IUser } from "../_modules/user";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const UserList: React.FC<{
  users: IUser[] | [];
  setUsers: Dispatch<SetStateAction<IUser[] | []>>;
}> = ({ users, setUsers }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  const deleteUser = async (id: string) => {
    try {
      const token = getCookie("jwt");
      if (!token) throw new Error("No token found");

      const res = await fetch(`${VINOMEMO_API_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error deleting user");
      return await res.json();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description:
          "There was a problem deleting the user, please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleClick = async (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setSelectedUserId(id);
    onOpen();
  };

  const handleDelete = async () => {
    await deleteUser(selectedUserId);
    setUsers([]);
    setSelectedUserId("");
    onClose();
  };

  return (
    <>
      {users.map((user: IUser) => (
        <Card key={user._id} mb={3}>
          <CardHeader>
            <Text fontSize="xl">User</Text>
          </CardHeader>
          <CardBody>
            <Text color="gray.600">id: {user?._id}</Text>
            <Text color="gray.600">email: {user?.email}</Text>
            <Text color="gray.600">name: {user?.name}</Text>
            <Text color="gray.600">
              isAdmin: {user?.isAdmin ? "true" : "false"}
            </Text>
            <Text color="gray.600">createdAt: {user?.createdAt}</Text>
            <Text color="gray.600">updatedAt: {user?.updatedAt}</Text>
          </CardBody>
          <CardFooter>
            <Flex width="100%" justifyContent="flex-end">
              <HStack>
                <Button onClick={(event) => handleClick(event, user._id)}>
                  Delete
                </Button>
                <Button as={Link} href={`/backoffice/user/${user._id}`}>
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
              Are you sure you want to delete this user?
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
