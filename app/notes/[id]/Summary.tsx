"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Link,
  Spinner,
  Stack,
  StackDivider,
  Text,
  useToast,
} from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import { INote } from "@/app/_modules/note";

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const Summary = ({ id }: { id: string }) => {
  const [note, setNote] = useState<INote>({} as INote);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const getNote = async () => {
      try {
        const token = getCookie("jwt");
        if (!token) throw new Error("No token found");

        const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Error fetching note");
        const note = await res.json();
        setNote(note);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description:
            "There was a problem getting your note, please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    getNote();
  }, [id, toast]);

  if (isLoading) return <Spinner color="brand.900" />;

  return (
    <Stack width="100%" maxWidth="2xl">
      <HStack justifyContent="space-between" mb={4}>
        <Stack>
          <Heading as="h2" size="md">
            Summary
          </Heading>
          <Text fontSize="sm" color="gray.600">
            Added on {new Date(note.createdAt!).toLocaleString()}
          </Text>
        </Stack>
        <Button as={Link} href="/notes">
          Back
        </Button>
      </HStack>
      <Card>
        <CardHeader>
          <Heading size="sm" textTransform="uppercase">
            Information
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={2}>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Name</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.name}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Country</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.country}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Region</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.region}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Grapes</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.grapes}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Producer</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.producer}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Vintage</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.vintage}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Alcohol</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.information.alcohol}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="sm" textTransform="uppercase">
            Appearance
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={2}>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Intensity</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.appearance?.intensity}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Color</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.appearance?.color}
                {note.appearance?.variant && `: ${note.appearance?.variant}`}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="sm" textTransform="uppercase">
            Nose
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={2}>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Intensity</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.nose?.intensity}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Aroma characteristics</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.nose?.aromas}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="sm" textTransform="uppercase">
            Palate
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={2}>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Sweetness</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.sweetness}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Acidity</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.sweetness}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Tannin</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.tannin}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Alcohol</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.alcohol}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Body</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.body}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Flavor intesity</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.intensity}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Flavor characteristics</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.flavors}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Finish</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.palate?.finish}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="sm" textTransform="uppercase">
            Conclusions
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={2}>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Quality</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.conclusions?.quality}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Heading size="xs">Comments</Heading>
              <Text fontSize="sm" color="gray.900" width="75%">
                {note.conclusions?.comments}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
