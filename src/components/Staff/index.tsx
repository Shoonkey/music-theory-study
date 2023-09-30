import {
  Box,
  Flex,
  Grid,
  Image,
  ImageProps,
  useColorMode,
} from "@chakra-ui/react";

import Clef from "../../shared/Clef";
import ClickableSurface from "./ClickableSurface";
import TimeSignature from "./TimeSignature";

interface StaffProps {
  clef: Clef;
  chosenNoteIndex: number | null;
  onNoteChoice: (index: number | null) => void;
}

function Staff({ clef, chosenNoteIndex, onNoteChoice }: StaffProps) {
  const { colorMode } = useColorMode();

  const lh = 4; // Line height in pixels
  const sh = 50; // Space height in pixels

  const surfaces: ("line" | "space")[] = [
    "line",
    "space",
    "line",
    "space",
    "line",
    "space",
    "line",
    "space",
    "line",
  ];

  let clefImage: ImageProps = {};

  if (clef === "treble")
    clefImage = {
      src: "/treble-clef.svg",
      alt: "Treble clef",
      transform: "scale(1.7, 1.7) translateX(20px)",
      filter: `invert(${colorMode === "dark" ? 1 : 0})`,
    };
  else if (clef === "bass")
    clefImage = {
      src: "/bass-clef.png",
      alt: "Bass clef",
      transform: "scale(.9, .9) translateX(12px) translateY(-12px)",
      filter: `invert(${colorMode === "dark" ? 1 : 0})`,
    };

  return (
    <Box w="100%" flexGrow={1} position="relative">
      <Box overflowX="auto">
        <Grid
          minW="500px"
          gridTemplateRows={`${lh}px ${sh}px ${lh}px ${sh}px ${lh}px ${sh}px ${lh}px ${sh}px ${lh}px`}
          px={{ base: 0, md: 6 }}
          py={16}
          alignItems="center"
          position="relative"
        >
          {clefImage && (
            <Image
              {...clefImage}
              pos="absolute"
              h={`${lh * 5 + sh * 4}px`}
              zIndex={1}
            />
          )}
          <Flex
            pos="absolute"
            transform="translateX(200px)"
            h={`${lh * 5 + sh * 4}px`}
            zIndex={1}
            color="gray.500"
          >
            <TimeSignature notesPerBar={4} unitNote={4} />
          </Flex>
          {surfaces.map((surfaceType, index) => (
            <ClickableSurface
              key={index}
              type={surfaceType}
              height={surfaceType === "line" ? lh : sh}
              notePlaced={chosenNoteIndex === index}
              onClick={() =>
                onNoteChoice(chosenNoteIndex === index ? null : index)
              }
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Staff;
