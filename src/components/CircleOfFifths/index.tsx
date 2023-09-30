import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import Piece from "./Piece";

interface CircleOfFifthsProps {
  scale?: number;
  missingPiece?: string;
}

function CircleOfFifths({ scale = 1, missingPiece }: CircleOfFifthsProps) {
  const circleColor = useColorModeValue("gray.800", "gray.400");

  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      w="680px"
      h="520px"
      transform={`scale(${scale})`}
    >
      {/* Circle */}
      <Box
        w="400px"
        h="400px"
        borderRadius="50%"
        borderStyle="solid"
        borderWidth="1px"
        borderColor={circleColor}
      />
      {/* Inner layer: Minor scales */}
      <Piece
        missing={missingPiece === "Fmin"}
        isScale
        note="F"
        type="minor"
        top="50%"
        left="26%"
      />
      <Piece
        missing={missingPiece === "Cmin"}
        isScale
        note="C"
        type="minor"
        top="35%"
        left="28%"
      />
      <Piece
        missing={missingPiece === "Gmin"}
        isScale
        note="G"
        type="minor"
        top="24%"
        left="34%"
      />
      <Piece
        missing={missingPiece === "Dmin"}
        isScale
        note="D"
        type="minor"
        top="19%"
        left="42%"
      />
      <Piece
        missing={missingPiece === "Amin"}
        isScale
        note="A"
        type="minor"
        top="15%"
        left="50%"
      />
      <Piece
        missing={missingPiece === "Emin"}
        isScale
        note="E"
        type="minor"
        top="19%"
        left="62%"
      />
      <Piece
        missing={missingPiece === "Bmin"}
        isScale
        note="B"
        type="minor"
        top="27%"
        left="68%"
      />
      <Piece
        missing={missingPiece === "E#min"}
        isScale
        note="F"
        accidental="sharp"
        type="minor"
        top="38%"
        left="72%"
      />
      <Piece
        missing={missingPiece === "C#min"}
        isScale
        note="C"
        accidental="sharp"
        type="minor"
        top="50%"
        left="73%"
      />
      <Piece
        missing={missingPiece === "G#min"}
        isScale
        note="G"
        accidental="sharp"
        type="minor"
        top="63%"
        left="70%"
      />
      <Piece
        missing={missingPiece === "D#min"}
        isScale
        note="D"
        accidental="sharp"
        type="minor"
        top="75%"
        left="65%"
      />
      <Piece
        missing={missingPiece === "A#min"}
        isScale
        note="A"
        accidental="sharp"
        type="minor"
        top="82%"
        left="56%"
      />
      <Piece
        missing={missingPiece === "Abmin"}
        isScale
        note="A"
        accidental="flat"
        type="minor"
        top="82%"
        left="44%"
      />
      <Piece
        missing={missingPiece === "Ebmin"}
        isScale
        note="E"
        accidental="flat"
        type="minor"
        top="76%"
        left="36%"
      />
      <Piece
        missing={missingPiece === "Bbmin"}
        isScale
        note="B"
        accidental="flat"
        type="minor"
        top="65%"
        left="30%"
      />

      {/* First outside layer: Major scales */}
      <Piece
        missing={missingPiece === "Abmaj"}
        isScale
        note="A"
        accidental="flat"
        type="major"
        top="50%"
        left="14%"
      />
      <Piece
        missing={missingPiece === "Ebmaj"}
        isScale
        note="E"
        accidental="flat"
        type="major"
        top="33%"
        left="16%"
      />
      <Piece
        missing={missingPiece === "Bbmaj"}
        isScale
        note="B"
        accidental="flat"
        type="major"
        top="17%"
        left="24%"
      />
      <Piece
        missing={missingPiece === "Fmaj"}
        isScale
        note="F"
        type="major"
        top="10%"
        left="35%"
      />
      <Piece
        missing={missingPiece === "Cmaj"}
        isScale
        note="C"
        type="major"
        top="6%"
        left="50%"
      />
      <Piece
        missing={missingPiece === "Gmaj"}
        isScale
        note="G"
        type="major"
        top="11%"
        left="67%"
      />
      <Piece
        missing={missingPiece === "Dmaj"}
        isScale
        note="D"
        type="major"
        top="22%"
        left="78%"
      />
      <Piece
        missing={missingPiece === "Amaj"}
        isScale
        note="A"
        type="major"
        top="36%"
        left="84%"
      />
      <Piece
        missing={missingPiece === "Emaj"}
        isScale
        note="E"
        type="major"
        top="50%"
        left="85%"
      />
      <Piece
        missing={missingPiece === "Bmaj"}
        isScale
        note="B"
        type="major"
        top="65%"
        left="83%"
      />
      <Piece
        missing={missingPiece === "F#maj"}
        isScale
        note="F"
        accidental="sharp"
        type="major"
        top="82%"
        left="75%"
      />
      <Piece
        missing={missingPiece === "C#min"}
        isScale
        note="C"
        accidental="sharp"
        type="minor"
        top="92%"
        left="58%"
      />
      <Piece
        missing={missingPiece === "Cbmin"}
        isScale
        note="C"
        accidental="flat"
        type="minor"
        top="91%"
        left="40%"
      />
      <Piece
        missing={missingPiece === "Gbmin"}
        isScale
        note="G"
        accidental="flat"
        type="minor"
        top="82%"
        left="24%"
      />
      <Piece
        missing={missingPiece === "Dbmin"}
        isScale
        note="D"
        accidental="flat"
        type="minor"
        top="67%"
        left="16%"
      />

      {/* Second outside layer: accidentals */}
      <Piece
        missing={missingPiece === "Ab"}
        note="A"
        accidental="flat"
        top="28%"
        left="8%"
      />
      <Piece
        missing={missingPiece === "Eb"}
        note="E"
        accidental="flat"
        top="12%"
        left="16%"
      />
      <Piece
        missing={missingPiece === "Bb"}
        note="B"
        accidental="flat"
        top="4%"
        left="30%"
      />
      <Piece
        missing={missingPiece === "F#"}
        note="F"
        accidental="sharp"
        top="6%"
        left="72%"
      />
      <Piece
        missing={missingPiece === "C#"}
        note="C"
        accidental="sharp"
        top="18%"
        left="84%"
      />
      <Piece
        missing={missingPiece === "G#"}
        note="G"
        accidental="sharp"
        top="35%"
        left="92%"
      />
      <Piece
        missing={missingPiece === "D#"}
        note="D"
        accidental="sharp"
        top="50%"
        left="93%"
      />
      <Piece
        missing={missingPiece === "A#"}
        note="A"
        accidental="sharp"
        top="68%"
        left="90%"
      />
      <Piece
        missing={missingPiece === "E#"}
        note="E"
        accidental="sharp"
        top="88%"
        left="82%"
      />
      <Piece
        missing={missingPiece === "B#"}
        note="B"
        accidental="sharp"
        top="98%"
        left="63%"
      />
      <Piece
        missing={missingPiece === "Fb"}
        note="F"
        accidental="flat"
        top="97%"
        left="35%"
      />
      <Piece
        missing={missingPiece === "Cb"}
        note="C"
        accidental="flat"
        top="88%"
        left="17%"
      />
      <Piece
        missing={missingPiece === "Gb"}
        note="G"
        accidental="flat"
        top="74%"
        left="8%"
      />
      <Piece
        missing={missingPiece === "Db"}
        note="D"
        accidental="flat"
        top="50%"
        left="4%"
      />
    </Flex>
  );
}

export default CircleOfFifths;
