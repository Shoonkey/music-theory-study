import { Text } from "@chakra-ui/react"

interface PieceProps {
  text: string
  transform: string
}

function Piece({ text, transform }: PieceProps) {
  return (
    <Text transform={transform}>
      {text}
    </Text>
  )
}

export default Piece