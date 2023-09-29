import { Box } from "@chakra-ui/react"
import { useState } from "react"

interface ClickableSurfaceProps {
  type: "line" | "space"
  height: number
  notePlaced: boolean
  onClick: () => void
}

interface SurfaceProps {
  height: number
}

const Line = ({ height }: SurfaceProps) => (
  <Box w="100%" py={4}>
    <Box h={`${height}px`} background="#e2e2e2" />
  </Box>
)

const Space = ({ height }: SurfaceProps) => <Box w="100%" h={`${height}px`} />

function ClickableSurface({ type, height, notePlaced, onClick }: ClickableSurfaceProps) {
  const [showButton, setShowButton] = useState(false)

  return (
    <Box
      onMouseOver={() => setShowButton(true)}
      onMouseOut={() => setShowButton(false)}
      pos="relative"
      cursor="pointer"
      onClick={onClick}
    >
      {(notePlaced || showButton) && (
        <Box
          pos="absolute"
          w="50px"
          h="40px"
          background={notePlaced ? "#e2e2e2" : "#e2e2e24f"}
          borderRadius="50%"
          border="solid 1px white"
          left="280px"
          top={type === "space" ? "5px" : "0px"}
        />
      )}
      {type === "line" && <Line height={height} />}
      {type === "space" && <Space height={height} />}
    </Box>
  )
}

export default ClickableSurface
