"use client";

import { useState } from "react";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useField } from "formik";

const COLORS = [
  {
    main: "white",
    hex: "#F8EECA",
    variants: [
      { name: "lemon", hex: "#F8EECA" },
      { name: "amber", hex: "#DD7A31" },
      { name: "gold", hex: "#F4C75A" },
    ],
  },
  {
    main: "rosé",
    hex: "#F3CACA",
    variants: [
      { name: "pink", hex: "#F4C9CB" },
      { name: "pink-orange", hex: "#E99A8C" },
      { name: "orange", hex: "#F5A865" },
    ],
  },
  {
    main: "red",
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

type MainSelectProps = {
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
        variant="outline"
        aspectRatio={1 / 1}
        borderRadius="50%"
        backgroundColor={backgroundColor}
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          background: backgroundColor,
        }}
        sx={{ boxShadow: selected === color && "outline" }}
        onClick={() => handleClick(color)}
      ></Flex>
      <Text>{color}</Text>
    </VStack>
  );
};

const MainSelect: React.FC<MainSelectProps> = ({
  selectedColor,
  onClick: callback,
  ...props
}) => {
  const [, , helpers] = useField(props.name);
  const [, , variantHelpers] = useField("variant");
  const { setValue } = helpers;

  const handleClick = (color: string) => {
    setValue(color);
    callback(color);
    variantHelpers.setValue("");
  };

  return (
    <>
      {COLORS.map((color) => (
        <SelectButton
          key={color.main}
          color={color.main}
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
  const { setValue } = helpers;

  const handleClick = (main: string) => {
    setValue(main);
    callback(main);
  };

  return (
    <>
      {COLORS.find((option) => option.main === selectedColor)?.variants.map(
        (variant) => (
          <SelectButton
            key={variant.name}
            color={variant.name}
            backgroundColor={variant.hex}
            selected={selectedVariant}
            onClick={handleClick}
          />
        )
      )}
    </>
  );
};

export const ColorSelect = ({ userColor = "white", userVariant = "" }) => {
  const [selectedMain, setSelectedMain] = useState(userColor);
  const [selectedVariant, setSelectedVariant] = useState(userVariant);

  const handleColorClick = (color: string) => {
    setSelectedMain(color);
    setSelectedVariant("");
  };

  return (
    <VStack width="75%">
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <MainSelect
          name="appearance.color.main"
          type="text"
          selectedColor={selectedMain}
          onClick={handleColorClick}
        />
      </Flex>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <VariantSelect
          name="appearance.color.variant"
          type="text"
          selectedColor={selectedMain}
          selectedVariant={selectedVariant}
          onClick={setSelectedVariant}
        />
      </Flex>
    </VStack>
  );
};
