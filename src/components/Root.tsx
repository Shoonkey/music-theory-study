import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Select,
  Tooltip,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SunHorizon, MoonStars, ArrowLeft } from "@phosphor-icons/react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import useAppSettings from "../hooks/useAppSettings";
import Homepage from "../pages/Homepage";
import CircleOfFifthsQuiz from "../pages/CircleOfFifthsQuiz";
import PlaceNoteQuiz from "../pages/PlaceNoteQuiz";

function Root() {
  const { t, i18n } = useTranslation();
  const { isSubapp, theme, setTheme } = useAppSettings();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex
      flexDir="column"
      w={isSubapp ? "100%" : "100dvw"}
      h={isSubapp ? "100%" : "100dvh"}
    >
      <Flex alignItems="center" p={2}>
        {location.pathname !== "/" && (
          <Button
            variant="ghost"
            leftIcon={<ArrowLeft size={32} />}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        )}
        {!isSubapp && (
          <Box
            ml="auto"
            bg="linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 62%, 1) 100%)"
            p={1}
            borderRadius="8px"
          >
            <Flex gap={2} borderRadius="8px">
              <VisuallyHidden>{t("appSettings")}</VisuallyHidden>
              <Select
                w="auto"
                bg="gray.800"
                color="whiteAlpha.800"
                aria-label={t("selectLanguage")}
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en-US">en-US</option>
                <option value="pt-BR">pt-BR</option>
                <option value="es-ES">es-ES</option>
              </Select>
              <Tooltip placement="left" label={t("changeTheme")}>
                <IconButton
                  aria-label={t("changeTheme")}
                  color="gray.800"
                  bg="transparent"
                  _hover={{ bg: "whiteAlpha.400" }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  icon={
                    theme === "dark" ? (
                      <SunHorizon size={36} weight="fill" />
                    ) : (
                      <MoonStars size={36} weight="fill" />
                    )
                  }
                />
              </Tooltip>
            </Flex>
          </Box>
        )}
      </Flex>
      <Center flexGrow={1}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/quiz/place-note"
            element={<PlaceNoteQuiz clef="treble" />}
          />
          <Route
            path="/quiz/circle-of-fifths"
            element={<CircleOfFifthsQuiz />}
          />
        </Routes>
      </Center>
    </Flex>
  );
}

export default Root;
