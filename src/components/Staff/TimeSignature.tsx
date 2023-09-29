import { Flex, Heading } from "@chakra-ui/react"

interface TimeSignatureProps {
  notesPerBar: number
  unitNote: number
}

function TimeSignature({ notesPerBar, unitNote }: TimeSignatureProps) {
  return (
    <Flex
      py={4}
      flexDir="column"
      justifyContent="space-around"
      fontFamily="Martian Mono"
      fontSize={86}
      color="#efae32"
    >
      <Heading as="h2" fontFamily="inherit" fontSize="inherit">
        {notesPerBar}
      </Heading>
      <Heading as="h2" fontFamily="inherit" fontSize="inherit">
        {unitNote}
      </Heading>
    </Flex>
  )
}

export default TimeSignature
