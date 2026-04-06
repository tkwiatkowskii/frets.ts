import { useContext } from "react";
import type { FretboardDimensionsProps } from "../types/FreatboardDimensionsProps";
import type { Note } from "../../../types/Notes";
import Keys from "../../../constants/KEYS";
import calculateEqualTemperamentDistance from "../utils/calculateEqualTemperamentDistance";
import { TuningContext } from "../../../context/TuningContext";
import { KeyContext } from "../../../context/key/KeyContext";
import FrettedNote from "./FrettedNote";
import OpenNote from "./OpenNote";


function toCanonical(note: Note): Note {
  const map: Partial<Record<Note, Note>> = {
    "E#": "F",
    "B#": "C",
    "Fb": "E",
    "Cb": "B",

    "C##": "D",
    "D##": "E",
    "E##": "F#",
    "F##": "G",
    "G##": "A",
    "A##": "B",

    "Bbb": "A",
    "Abb": "G",
    "Gbb": "F",
    "Fbb": "Eb",
    "Ebb": "D",
    "Dbb": "C",
  };

  // IMPORTANT: fallback must be narrowed manually
  const result = map[note];

  if (result) return result;

  // safe cast only after validation
  return note as Note;
}

/* -----------------------------
   CHROMATIC (CANONICAL ONLY)
------------------------------ */
const CHROMATIC: Note[] = [
  "C", "C#", "D", "D#", "E", "F",
  "F#", "G", "G#", "A", "A#", "B",
];

/* -----------------------------
   SPELLING SYSTEM (FOR DISPLAY)
------------------------------ */
const PITCH_CLASS = [
  { sharp: "C", flat: "C" },
  { sharp: "C#", flat: "Db" },
  { sharp: "D", flat: "D" },
  { sharp: "D#", flat: "Eb" },
  { sharp: "E", flat: "E" },
  { sharp: "F", flat: "F" },
  { sharp: "F#", flat: "Gb" },
  { sharp: "G", flat: "G" },
  { sharp: "G#", flat: "Ab" },
  { sharp: "A", flat: "A" },
  { sharp: "A#", flat: "Bb" },
  { sharp: "B", flat: "B" },
] as const;

type AccidentalQuality = "sharp" | "flat";

function spell(pc: number, quality: AccidentalQuality): Note {
  return quality === "flat"
    ? (PITCH_CLASS[pc].flat as Note)
    : (PITCH_CLASS[pc].sharp as Note);
}

/* -----------------------------
   COMPONENT
------------------------------ */
function Notes(fretboardDimensionProps: FretboardDimensionsProps) {
  const { tuning } = useContext(TuningContext)!;
  const { rootNote, mode } = useContext(KeyContext)!;

  const { startY, startX, endY, endX } = fretboardDimensionProps;

  const safeRoot = toCanonical(rootNote);
  const keyData = Keys[mode][safeRoot]!;

  const accidentalQuality = keyData.accidental as AccidentalQuality;

  const chosenKey = keyData.notes.map(toCanonical) as Note[];

  const stringCount = tuning.length;
  const scaleLength = endX - startX;
  const height = endY - startY;

  /* -----------------------------
     FRETTED NOTES
  ------------------------------ */
  const frettedNotes = tuning.map((openString, stringIndex) => {
    const rawNote = openString.slice(0, -1) as Note;
    const octave = parseInt(openString.slice(-1));

    const openPc = toCanonical(rawNote);
    const noteIndex = CHROMATIC.indexOf(openPc as Note);

    const reversedStringIndex = stringCount - 1 - stringIndex;

    const y =
      startY + (reversedStringIndex * height) / (stringCount - 1);

    return Array.from({ length: 12 }, (_, i) => {
      const fret = i + 1;

      const pc = (noteIndex + fret) % 12;
      const noteAtFret = spell(pc, accidentalQuality);

      const octaveAtFret =
        octave + Math.floor((noteIndex + fret) / 12);

      const canonicalNote = toCanonical(noteAtFret);

      const isInKey = chosenKey.includes(canonicalNote as Note);
      if (!isInKey) return null;

      const noteWithOctave = `${noteAtFret}${octaveAtFret}`;

      const x = calculateEqualTemperamentDistance(
        fret - 0.5,
        startX,
        scaleLength
      );

      const isRoot = canonicalNote === safeRoot;

      return (
        <FrettedNote
          key={`${stringIndex}-${i}`}
          x={x}
          y={y}
          label={noteWithOctave}
          isRoot={isRoot}
        />
      );
    });
  });

  /* -----------------------------
     OPEN NOTES
  ------------------------------ */
  const openNotes = tuning.map((openString, stringIndex) => {
  const rawNote = openString.slice(0, -1) as Note;

  const canonicalOpen = toCanonical(rawNote);

  const isInKey = chosenKey.includes(canonicalOpen);
  if (!isInKey) return null;

  const reversedStringIndex = stringCount - 1 - stringIndex;

  const y =
    startY + (reversedStringIndex * height) / (stringCount - 1);

  return (
    <OpenNote
      key={stringIndex}
      x={startX}
      y={y}
      label={openString}
    />
  );
});

  return (
    <g className="notes">
      {openNotes}
      {frettedNotes}
    </g>
  );
}

export default Notes;