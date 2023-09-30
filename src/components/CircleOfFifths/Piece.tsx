import { Center, Text, TextProps } from "@chakra-ui/react";

import Note from "../../shared/Note";

interface PieceProps {
  note: Note;
  missing: boolean;
  isScale?: boolean;
  type?: "major" | "minor";
  accidental?: "sharp" | "flat";
}

function Piece({
  note,
  accidental,
  type,
  isScale,
  missing,
  ...props
}: PieceProps & TextProps) {
  if (missing)
    return (
      <Center
        color="black"
        bg="#efae13"
        position="absolute"
        transform="translate(-50%, -50%)"
        w="48px"
        h="48px"
        borderRadius="50%"
        {...props}
      >
        <Text mt={2} fontSize="32px" fontWeight="bold" textAlign="center">
          ?
        </Text>
      </Center>
    );

  return (
    <Text position="absolute" transform="translate(-50%, -50%)" {...props}>
      <Text
        textShadow="0px 1px 1px black"
        color="#efae32"
        fontWeight="bold"
        fontSize="24px"
        as="strong"
      >
        {note}
        {accidental === "sharp" && "#"}
        {accidental === "flat" && "b"}
      </Text>
      {isScale && (
        <Text as="span" fontSize="16px">
          {type === "major" && "maj"}
          {type === "minor" && "min"}
        </Text>
      )}
    </Text>
  );
}

export default Piece;
