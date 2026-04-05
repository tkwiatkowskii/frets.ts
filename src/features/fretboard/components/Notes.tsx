import { useState } from "react";
import type { FretboardDimensionsProps } from "../types/FreatboardDimensionsProps";
import type { Tuning } from "../types/Tuning";
import type { Note } from "../types/Notes";
import Keys from "../constants/keys";
import calculateEqualTemperamentDistance from "../utils/calculateEqualTemperamentDistance";

const standardTuning : Tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];
  // @ts-ignore
const dropDTuning : Tuning = ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'];
  // @ts-ignore
const dropCTuning : Tuning = ['C2', 'G2', 'C3', 'F3', 'A3', 'D4'];
  // @ts-ignore
const dropASharpTuning : Tuning = ['A#1', 'F2', 'A#2', 'D#3', 'G3', 'C4'];

export default function Notes(fretboardDimensionProps : FretboardDimensionsProps) {
  const [chosenTuning, setChosenTuning] = useState<Tuning>(standardTuning);
  const [chosenKey, setChosenKey] = useState<Note[]>(Keys.minor.Bb?.notes as Note[]);

  const stringCount = chosenTuning.length;

  const accidentalQuality = Keys.minor.Bb?.accidental as string;
  const rootNote = Keys.minor.Bb?.notes[0] as Note;
  // @ts-ignore
  const { startY, startX, endY, endX } = fretboardDimensionProps;

  const scaleLength = endX - startX;

  const NotesInSharpKeys : Note[] = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  const NotesInFlatKeys : Note[] = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

  let chosenNotes : Note[] = 
    accidentalQuality === "sharps" || accidentalQuality === "natural" 
      ? NotesInSharpKeys : NotesInFlatKeys;

  const height = endY - startY;

  const notesToRender = chosenTuning.map((note, stringIndex) => {
    const noteName : Note = note.slice(0, -1) as Note;
    const octave = parseInt(note.slice(-1));
    const noteIndex = chosenNotes.indexOf(noteName);

    const reversedStringIndex = stringCount - 1 - stringIndex;

    const y =
      startY + (reversedStringIndex * height) / (stringCount - 1);

    return Array.from({ length: 12 }, (_, i) => {
      const n = i + 1;

      const noteAtFret = chosenNotes[(noteIndex + n) % 12] as Note;
      const octaveAtFret = octave + Math.floor((noteIndex + n) / 12);

      if (!chosenKey.includes(noteAtFret)) {
        return null;
      }

      const noteWithOctave = `${noteAtFret}${octaveAtFret}`;

      const x = calculateEqualTemperamentDistance(
        n + 0.5 - 1,
        startX,
        scaleLength
      );

      const isRoot = noteAtFret === rootNote;

      return (
        <g key={`${stringIndex}-${n}`} className="frettedNote`">
          <circle
            cx={x}
            cy={y}
            r={15}
            fill={isRoot ? "#fdd303" : "white"}
            stroke="black"
            strokeWidth="2"
          />
          <text
            x={x}
            y={y}
            dy="0.3em"
            textAnchor="middle"
            fontSize="13"
            fill="black"
          >
            {noteWithOctave}
          </text>
        </g>
      )
    })
  });

  const openNotes = chosenTuning.map((note, stringIndex) => {
    const reversedStringIndex = stringCount - 1 - stringIndex;

    const y =
      startY + (reversedStringIndex * height) / (stringCount - 1);
    
    return (
      <g key={`${note}-${stringIndex}-open`} className="openNote">
          <circle
            cx={startX}
            cy={y}
            r={15}
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <text
            x={startX}
            y={y}
            dy="0.3em"
            textAnchor="middle"
            fontSize="13"
            fill="black"
          >
            {note}
          </text>
        </g>
    )  
  });

  return (
    <g className="notes">
      {openNotes}
      {notesToRender}
    </g>
  )
}