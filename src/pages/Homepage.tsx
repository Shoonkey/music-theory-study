import { Center, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { CircleDashed, MusicNoteSimple } from "@phosphor-icons/react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import QuizInfo from "../shared/QuizInfo";
import Page from "../components/Page";

function Homepage() {
  const { t } = useTranslation();

  const quizzes = useMemo<QuizInfo[]>(
    () => [
      {
        name: t("quizzes.placeNoteTreble"),
        href: "/quiz/place-note?clef=treble",
        icon: (
          <Image
            src="/treble-clef.svg"
            alt="Treble clef"
            mx="auto"
            h="100px"
          />
        ),
      },
      {
        name: t("quizzes.placeNoteBass"),
        href: "/quiz/place-note?clef=bass",
        icon: (
          <Image
            src="/bass-clef.png"
            alt="Bass clef"
            mx="auto"
            h="100px"
          />
        ),
      },
      {
        name: t("quizzes.circleOfFifths"),
        href: "/quiz/circle-of-fifths",
        icon: <CircleDashed size={96} />,
      },
    ],
    [t]
  );

  const cardBackgroundColor = useColorModeValue("#d2d2d2", "#2b2b2b");

  return (
    <Page metaTitle="home">
      <Center flexDir="column" flexGrow={1}>
        <Flex alignItems="center" flexDir="column" mb={12}>
          <MusicNoteSimple size={128} color="#efae32" />
          <Heading mt={4} as="h2" fontFamily="Arvo" fontWeight="bold">
            {t("pages.home.chooseQuiz")}
          </Heading>
        </Flex>
        <Flex flexWrap="wrap" gap={4}>
          {quizzes.map((quiz, index) => (
            <Link to={quiz.href} key={`quiz-${index}`}>
              <Flex
                borderStyle="solid"
                borderWidth="2px"
                borderColor="gray.800"
                flexDir="column"
                h="100%"
                px={10}
                py={6}
                bg={cardBackgroundColor}
                gap={4}
                maxW="300px"
                justifyContent="baseline"
                textAlign="center"
                borderRadius="16px"
                transition="all .3s"
                _hover={{
                  borderRadius: "32px",
                  bg: "#efae32",
                  color: "#2b2b2b",
                }}
              >
                <Center flexGrow={1}>{quiz.icon}</Center>
                <Heading as="h4" size="lg" my="auto">
                  {quiz.name}
                </Heading>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Center>
    </Page>
  );
}

export default Homepage;
