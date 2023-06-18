import { Box, Heading, Text, VStack, useTheme } from "@chakra-ui/react";

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
  const theme = useTheme();

  return (
    <VStack alignItems={alignItems} spacing="4" w="100%" mb={8}>
      <Heading>
        {title.includes("<b>") ? (
          <>
            {title.split("<b>")[0]}{" "}
            <Text as="span" fontFamily={theme.fonts.notoSerif}>
              {title.split("<b>")[1].replace("</b>", "")}
            </Text>
          </>
        ) : (
          title
        )}
      </Heading>
      <Box>
        {detail &&
          detail.split("<br/>").map((line, index) => {
            return (
              <Text key={index}>
                {line.includes("<b>") ? (
                  <>
                    {line.split("<b>")[0]}{" "}
                    <Text as="span" fontFamily={theme.fonts.notoSerif}>
                      {line.split("<b>")[1].replace("</b>", "")}
                    </Text>
                  </>
                ) : (
                  line
                )}
              </Text>
            );
          })}
      </Box>
    </VStack>
  );
};
