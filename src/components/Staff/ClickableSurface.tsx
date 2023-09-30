import { Box, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

interface ClickableSurfaceProps {
  type: "line" | "space";
  height: number;
  notePlaced: boolean;
  onClick: () => void;
}

interface LineProps {
  height: number;
  color: string;
}

interface SpaceProps {
  height: number;
}

const Line = ({ height, color }: LineProps) => (
  <Box w="100%" py={4}>
    <Box h={`${height}px`} background={color} />
  </Box>
);

const Space = ({ height }: SpaceProps) => <Box w="100%" h={`${height}px`} />;

function ClickableSurface({
  type,
  height,
  notePlaced,
  onClick,
}: ClickableSurfaceProps) {
  const [showButton, setShowButton] = useState(false);

  const unplacedBgColor = "blackAlpha.700";
  const placedBgColor = "black";
  const lineColor = useColorModeValue("#2b2b2b", "#e2e2e2");

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
          background={notePlaced ? placedBgColor : unplacedBgColor}
          borderRadius="50%"
          left="280px"
          top={type === "space" ? "5px" : "0px"}
        />
      )}
      {type === "line" && <Line color={lineColor} height={height} />}
      {type === "space" && <Space height={height} />}
    </Box>
  );
}

export default ClickableSurface;
