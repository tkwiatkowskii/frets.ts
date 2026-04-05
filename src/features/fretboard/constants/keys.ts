import type { KeySystem } from "../types/Keys";

const keys: KeySystem = {
  major: {
    C: {
      notes: ["C", "D", "E", "F", "G", "A", "B"],
      accidental: "natural"
    },

    "C#": {
      notes: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
      accidental: "sharp"
    },
    Db: {
      notes: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
      accidental: "flat"
    },

    D: {
      notes: ["D", "E", "F#", "G", "A", "B", "C#"],
      accidental: "sharp"
    },
    "D#": {
      notes: ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
      accidental: "sharp"
    },
    Eb: {
      notes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
      accidental: "flat"
    },

    E: {
      notes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
      accidental: "sharp"
    },

    F: {
      notes: ["F", "G", "A", "Bb", "C", "D", "E"],
      accidental: "flat"
    },
    "F#": {
      notes: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
      accidental: "sharp"
    },
    Gb: {
      notes: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
      accidental: "flat"
    },

    G: {
      notes: ["G", "A", "B", "C", "D", "E", "F#"],
      accidental: "sharp"
    },
    "G#": {
      notes: ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
      accidental: "sharp"
    },
    Ab: {
      notes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
      accidental: "flat"
    },

    A: {
      notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
      accidental: "sharp"
    },
    "A#": {
      notes: ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
      accidental: "sharp"
    },
    Bb: {
      notes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
      accidental: "flat"
    },

    B: {
      notes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      accidental: "sharp"
    },
    Cb: {
      notes: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
      accidental: "flat"
    },
  },

  minor: {
    A: {
      notes: ["A", "B", "C", "D", "E", "F", "G"],
      accidental: "natural"
    },
    "A#": {
      notes: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
      accidental: "sharp"
    },
    Bb: {
      notes: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
      accidental: "flat"
    },

    B: {
      notes: ["B", "C#", "D", "E", "F#", "G", "A"],
      accidental: "sharp"
    },
    C: {
      notes: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
      accidental: "flat"
    },
    "C#": {
      notes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
      accidental: "sharp"
    },

    D: {
      notes: ["D", "E", "F", "G", "A", "Bb", "C"],
      accidental: "flat"
    },
    "D#": {
      notes: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
      accidental: "sharp"
    },
    Eb: {
      notes: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
      accidental: "flat"
    },

    E: {
      notes: ["E", "F#", "G", "A", "B", "C", "D"],
      accidental: "sharp"
    },

    F: {
      notes: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
      accidental: "flat"
    },
    "F#": {
      notes: ["F#", "G#", "A", "B", "C#", "D", "E"],
      accidental: "sharp"
    },
    Gb: {
      notes: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
      accidental: "flat"
    },

    G: {
      notes: ["G", "A", "Bb", "C", "D", "Eb", "F"],
      accidental: "flat"
    },
    "G#": {
      notes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
      accidental: "sharp"
    },
    Ab: {
      notes: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
      accidental: "flat"
    },
  },
};

export default keys;