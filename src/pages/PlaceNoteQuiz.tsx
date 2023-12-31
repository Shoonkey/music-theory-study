import { useEffect, useMemo, useState } from "react";
import { Box, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Note from "../shared/Note";
import Clef from "../shared/Clef";
import { getNoteFromIndex, getRandomPiece } from "../shared/util";
import Page from "../components/Page";
import Staff from "../components/Staff";
import { useSearchParams } from "react-router-dom";

interface QuizData {
  stage: "choose-note" | "note-chosen";
  expectedNote: Note;
  chosenNoteIndex: number | null;
}

function PlaceNoteQuiz() {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();
  const clefParam = useMemo(() => searchParams.get("clef"), [searchParams]);

  const [quizData, setQuizData] = useState<QuizData | null>(null);

  // Has the user changed the note placement after confirming selection and before clicking next?
  const [reselectedAfterConfirm, setReselectedAfterConfirm] = useState(false);

  // Note: state is set at first through a React effect to prevent Next's hydration error
  // (https://nextjs.org/docs/messages/react-hydration-error)
  useEffect(() => {
    setQuizData({
      stage: "choose-note",
      expectedNote: getRandomPiece({ type: "note" }) as Note,
      chosenNoteIndex: null,
    });
  }, [searchParams]);

  useEffect(() => {
    if (clefParam) return;

    const newParams = new URLSearchParams();
    newParams.set("clef", "treble");
    setSearchParams(newParams, { replace: true });
  });

  if (!clefParam || !quizData)
    return (
      <Page metaTitle="placeNote">
        <Flex flexGrow={1} justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      </Page>
    );

  const clef = clefParam as Clef;

  return (
    <Page metaTitle="placeNote">
      <Flex flexDir="column" flexGrow={1} py={4} px={6} gap={6}>
        <Text ml={6} fontSize={22} color="gray.500" letterSpacing=".8px" textAlign="center">
          {t("pages.placeNote.exercise.description")}
        </Text>
        <Flex justifyContent="center" flexDir="column">
          <Staff
            clef={clef}
            chosenNoteIndex={quizData.chosenNoteIndex}
            onNoteChoice={(index) => {
              if (quizData.stage === "note-chosen")
                setReselectedAfterConfirm(true);

              setQuizData({
                ...quizData,
                chosenNoteIndex: index,
              });
            }}
          />
          <Flex justifyContent="center" gap={4}>
            <Button
              bg="#fcbd44"
              color="black"
              disabled={
                quizData.chosenNoteIndex === null ||
                quizData.stage === "note-chosen"
              }
              _hover={{ bg: "#fab228" }}
              onClick={() => {
                setQuizData({ ...quizData, stage: "note-chosen" });
              }}
            >
              {t("pages.placeNote.confirm")}
            </Button>
            {quizData.stage === "note-chosen" && (
              <Button
                onClick={() => {
                  setQuizData({
                    stage: "choose-note",
                    expectedNote: getRandomPiece({ type: "note" }) as Note,
                    chosenNoteIndex: null,
                  });
                  setReselectedAfterConfirm(false);
                }}
              >
                {t("pages.placeNote.next")}
              </Button>
            )}
          </Flex>
        </Flex>
        <Box>
          {quizData.stage === "choose-note" && (
            <Heading
              as="h2"
              fontSize={48}
              textAlign="center"
              fontWeight="light"
              fontFamily="Arvo"
            >
              {t("pages.placeNote.exercise.goal")}{" "}
              <strong>{quizData.expectedNote}</strong>
            </Heading>
          )}
          {quizData.stage === "note-chosen" && !reselectedAfterConfirm && (
            <Text
              textAlign="center"
              color={
                quizData.expectedNote ===
                getNoteFromIndex(clef, quizData.chosenNoteIndex)
                  ? "green.400"
                  : "red.400"
              }
              fontSize={24}
            >
              {quizData.expectedNote ===
              getNoteFromIndex(clef, quizData.chosenNoteIndex) ? (
                t("pages.placeNote.exercise.result.correct")
              ) : (
                <>
                  {t("pages.placeNote.exercise.result.incorrect")}{" "}
                  <Text as="strong">
                    {getNoteFromIndex(clef, quizData.chosenNoteIndex)}
                  </Text>
                </>
              )}
            </Text>
          )}
        </Box>
      </Flex>
    </Page>
  );
}

export default PlaceNoteQuiz;
