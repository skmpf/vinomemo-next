import { Box, HStack, Text, useRadio, useRadioGroup } from "@chakra-ui/react";
import { useField } from "formik";

type RadioCardProps = {
  children: React.ReactNode;
  height?: number;
  index: number;
};

export const RadioCard: React.FC<RadioCardProps> = ({
  children,
  height = 50,
  index,
  ...props
}) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" width="100%" textAlign="center">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        bg="gray.200"
        boxShadow="md"
        _checked={{
          bg: "brand.900",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        height={(index + 1) * height}
      />
      <Text textTransform="uppercase" fontSize="xs">
        {children}
      </Text>
    </Box>
  );
};

type ScaleRadioProps = {
  name: string;
  options: string[];
  selected?: string;
};

export const ScaleRadio: React.FC<ScaleRadioProps> = ({
  name,
  options,
  selected = "",
}) => {
  const [, , helpers] = useField(name);
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: selected,
    onChange: helpers.setValue,
  });
  const group = getRootProps();
  const heightUnit = 50 / options.length;

  return (
    <HStack
      {...group}
      width={{ base: "100%", md: "75%" }}
      justifyContent="space-between"
      alignItems="flex-end"
    >
      {options.map((value, index) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} index={index} height={heightUnit} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
