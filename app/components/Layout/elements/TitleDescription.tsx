import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export type TitleDescriptionProps = {
  title: string;
  detail?: string;
  alignItems?: string;
};
export const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  detail,
  alignItems,
}) => {
  return (
    <VStack alignItems={alignItems} spacing="4" w="100%" mb={8}>
      <Heading>{title}</Heading>
      <Box>
        {detail &&
          detail.split("<br/>").map((line, index) => {
            return <Text key={index}>{line}</Text>;
          })}
      </Box>
    </VStack>
  );
};
