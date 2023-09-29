import { Box, Flex, Grid, Image } from "@chakra-ui/react"

import Clef from "../../shared/Clef"
import ClickableSurface from "./ClickableSurface"
import TimeSignature from "./TimeSignature"

interface StaffProps {
  clef: Clef
  chosenNoteIndex: number | null
  onNoteChoice: (index: number | null) => void
}

function Staff({ clef, chosenNoteIndex, onNoteChoice }: StaffProps) {
  const lh = 4 // Line height in pixels
  const sh = 50 // Space height in pixels

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
  ]

  let clefImage: { src: string; alt: string; transform: string; } | undefined

  if (clef === "treble")
    clefImage = { src: "/treble-clef.svg", alt: "Treble clef", transform: "scale(1.7, 1.7) translateX(20px)" };
  else if (clef === "bass")
    clefImage = { src: "/bass-clef.png", alt: "Bass clef", transform: "scale(.9, .9) translateX(12px) translateY(-12px)" };

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
          {
            clefImage && (
              <Image
                src={clefImage.src}
                alt={clefImage.alt}
                pos="absolute"
                filter="invert(1)"
                h={`${lh * 5 + sh * 4}px`}
                transform={clefImage.transform}
                zIndex={1}
              />
            )
          }
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
  )
}

export default Staff
