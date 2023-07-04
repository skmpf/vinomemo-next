"use client";

import Link from "next/link";
import { Card, CardBody, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

export const NoteCard = () => {
  return (
    <Card as={Link} href="/notes/1">
      <CardBody>
        <Text textTransform="uppercase" fontWeight={700} color="black">
          Montagne Saint Emilion
        </Text>
        <HStack>
          <Icon as={MdLocationOn} color="brand.900" />
          <Text fontSize="sm" color="gray.600">
            Saint-Emilion, France
          </Text>
        </HStack>
        <HStack>
          <Icon as={StarIcon} color="brand.900" />
          <Text fontSize="sm" color="gray.600">
            Very good
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          Added on 19/05/2023
        </Text>
      </CardBody>
    </Card>
  );
};
