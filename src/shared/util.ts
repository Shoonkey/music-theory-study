import Clef from "./Clef";
import Note from "./Note";

interface RandomNoteProps {
  type: "note" | "scale";
  includeAccidental?: boolean;
}

export function getRandomPiece({ type, includeAccidental }: RandomNoteProps) {
  const notes: Note[] = ["A", "B", "C", "D", "E", "F", "G"];

  const randomNoteIndex = Math.floor(Math.random() * notes.length);
  let result = notes[randomNoteIndex];

  if (includeAccidental) result += Math.round(Math.random()) === 1 ? "#" : "b";
  if (type === "scale")
    result += Math.round(Math.random()) === 1 ? "maj" : "min";

  return result;
}

export function getNoteFromIndex(clef: Clef, index: number | null) {
  if (index === null || index === undefined) return;

  const notesByIndex: { treble: Note[]; bass: Note[] } = {
    treble: ["F", "E", "D", "C", "B", "A", "G", "F", "E"],
    bass: ["A", "G", "F", "E", "D", "C", "B", "A", "G"],
  };

  return notesByIndex[clef][index];
}

export function getRandomCircleOfFifthsPiece() {}
