import type { Note } from "./Notes";

export type AccidentalQuality = "sharp" | "flat" | "natural";

export type Scale = {
  notes: Note[];
  accidental: AccidentalQuality;
};

export type KeySystem = {
  major: Partial<Record<Note, Scale>>;
  minor: Partial<Record<Note, Scale>>;
};