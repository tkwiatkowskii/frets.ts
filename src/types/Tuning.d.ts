import type { Note } from "./Notes";

export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type NoteWithOctave = `${Note}${Octave}`;

export type Tuning = NoteWithOctave[];