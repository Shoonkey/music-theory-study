import { FormEventHandler, useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import Page from "../components/Page";

import { getRandomPiece } from "../shared/util";
import CircleOfFifths from "../components/CircleOfFifths";
import { useTranslation } from "react-i18next";

interface QuizData {
  missingPiece: string;
  userAnswer: string;
  confirmed: boolean;
}

function CircleOfFifthsQuiz() {
  const { t } = useTranslation();

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const scale = useBreakpointValue({ base: 0.5, sm: 0.75, md: 1 });

  const inputBorderColor = useColorModeValue("gray.800", "gray.300");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!quizData) return;

    setQuizData({ ...quizData, confirmed: true });
  };

  // Note: state is set at first through a React effect to prevent Next's hydration error
  // (https://nextjs.org/docs/messages/react-hydration-error)
  useEffect(() => {
    const missingPieceType = Math.round(Math.random()) === 1 ? "scale" : "note";

    setQuizData({
      missingPiece: getRandomPiece({
        type: missingPieceType,
        includeAccidental: missingPieceType === "note",
      }),
      userAnswer: "",
      confirmed: false,
    });
  }, []);

  if (!quizData)
    return (
      <Page metaTitle="circleOfFifths">
        <Flex flexGrow={1} justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      </Page>
    );

  return (
    <Page metaTitle="circleOfFifths">
      <Flex
        flexDir="column"
        alignItems="center"
        flexGrow={1}
        py={4}
        px={6}
        gap={6}
      >
        <CircleOfFifths scale={scale} missingPiece={quizData.missingPiece} />
        <Heading as="h2" fontFamily="Arvo" fontWeight="light">
          {t("pages.circleOfFifths.exerciseDescription")}
        </Heading>
        <Flex as="form" onSubmit={handleSubmit} gap={2}>
          <Input
            borderColor={inputBorderColor}
            value={quizData.userAnswer}
            fontSize="32px"
            w="256px"
            h="64px"
            onChange={(e) =>
              setQuizData({ ...quizData, userAnswer: e.target.value })
            }
          />
          <Button
            disabled={quizData.userAnswer === ""}
            h="64px"
            colorScheme="cyan"
            type="submit"
          >
            {t("pages.circleOfFifths.answerButton")}
          </Button>
        </Flex>
        {quizData.confirmed && (
          <>
            <Text
              color={
                quizData.missingPiece.toLowerCase() ===
                quizData.userAnswer.toLowerCase()
                  ? "green.400"
                  : "red.400"
              }
            >
              {quizData.missingPiece.toLowerCase() ===
              quizData.userAnswer.toLowerCase() ? (
                t("pages.circleOfFifths.result.correct")
              ) : (
                <>
                  {t("pages.circleOfFifths.result.incorrect")}{" "}
                  <Text as="strong">{quizData.missingPiece}</Text>
                </>
              )}
            </Text>
            <Button
              onClick={() => {
                const missingPieceType =
                  Math.round(Math.random()) === 1 ? "scale" : "note";

                setQuizData({
                  missingPiece: getRandomPiece({
                    type: missingPieceType,
                    includeAccidental: missingPieceType === "note",
                  }),
                  userAnswer: "",
                  confirmed: false,
                });
              }}
            >
              {t("pages.circleOfFifths.next")}
            </Button>
          </>
        )}
      </Flex>
    </Page>
  );
}

export default CircleOfFifthsQuiz;
