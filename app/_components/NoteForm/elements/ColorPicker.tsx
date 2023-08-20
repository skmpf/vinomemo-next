"use client";

import { useState } from "react";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useField } from "formik";

const COLORS_OPTIONS = [
  {
    color: "white",
    hex: "#F8EECA",
    variants: [
      { name: "lemon", hex: "#F8EECA" },
      { name: "amber", hex: "#DD7A31" },
      { name: "gold", hex: "#F4C75A" },
    ],
  },
  {
    color: "rosé",
    hex: "#F3CACA",
    variants: [
      { name: "pink", hex: "#F4C9CB" },
      { name: "pink-orange", hex: "#E99A8C" },
      { name: "orange", hex: "#F5A865" },
    ],
  },
  {
    color: "red",
    hex: "#910235",
    variants: [
      { name: "purple", hex: "#8E0051" },
      { name: "ruby", hex: "#910536" },
      { name: "garnet", hex: "#AE1220" },
      { name: "tawny", hex: "#8A1F17" },
    ],
  },
];

type SelectButtonProps = {
  backgroundColor: string;
  color: string;
  selected: string;
  onClick: (color: string) => void;
};

type ColorSelectProps = {
  name: string;
  type: string;
  selectedColor: string;
  onClick: (color: string) => void;
};

type VariantSelectProps = {
  name: string;
  type: string;
  selectedColor: string;
  selectedVariant: string;
  onClick: (variant: string) => void;
};

const SelectButton: React.FC<SelectButtonProps> = ({
  backgroundColor,
  color,
  selected,
  onClick: handleClick,
}) => {
  return (
    <VStack spacing={0}>
      <Flex
        as={Button}
        id={color}
        variant="outline"
        aspectRatio={1 / 1}
        borderRadius="50%"
        bg={backgroundColor}
        boxShadow="md"
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          background: backgroundColor,
        }}
        sx={{ boxShadow: selected === color && "outline" }}
        onClick={() => handleClick(color)}
      ></Flex>
      <Text textTransform="uppercase" fontSize="xs">
        {color}
      </Text>
    </VStack>
  );
};

const ColorSelect: React.FC<ColorSelectProps> = ({
  selectedColor,
  onClick: callback,
  ...props
}) => {
  const [, , helpers] = useField(props.name);
  const [, , variantHelpers] = useField("appearance.variant");

  const handleClick = (color: string) => {
    helpers.setValue(color);
    variantHelpers.setValue("");
    callback(color);
  };

  return (
    <>
      {COLORS_OPTIONS.map((color) => (
        <SelectButton
          key={color.color}
          color={color.color}
          backgroundColor={color.hex}
          selected={selectedColor}
          onClick={handleClick}
        />
      ))}
    </>
  );
};

const VariantSelect: React.FC<VariantSelectProps> = ({
  selectedColor,
  selectedVariant,
  onClick: callback,
  ...props
}) => {
  const [, , helpers] = useField(props.name);
  const [, , colorHelpers] = useField("appearance.color");

  const handleClick = (color: string) => {
    helpers.setValue(color);
    colorHelpers.setValue(selectedColor);
    callback(color);
  };

  return (
    <>
      {COLORS_OPTIONS.find(
        (option) => option.color === selectedColor
      )?.variants.map((variant) => (
        <SelectButton
          key={variant.name}
          color={variant.name}
          backgroundColor={variant.hex}
          selected={selectedVariant}
          onClick={handleClick}
        />
      ))}
    </>
  );
};

export const ColorPicker = ({
  value,
}: {
  value: { color: string; variant: string };
}) => {
  const [selectedColor, setSelectedColor] = useState(value.color);
  const [selectedVariant, setSelectedVariant] = useState(value.variant);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setSelectedVariant("");
  };

  return (
    <VStack width={{ base: "100%", md: "75%" }}>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <ColorSelect
          name="appearance.color"
          type="text"
          selectedColor={selectedColor}
          onClick={handleColorClick}
        />
      </Flex>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <VariantSelect
          name="appearance.variant"
          type="text"
          selectedColor={selectedColor}
          selectedVariant={selectedVariant}
          onClick={setSelectedVariant}
        />
      </Flex>
    </VStack>
  );
};
