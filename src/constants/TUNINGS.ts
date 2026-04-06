import type { Tuning } from "../types/Tuning";

export const TUNINGS: Record<string, Tuning> = {
  standard: ["E2", "A2", "D3", "G3", "B3", "E4"],
  dropD: ["D2", "A2", "D3", "G3", "B3", "E4"],
  dropC: ["C2", "G2", "C3", "F3", "A3", "D4"],
  dropASharp: ["A#1", "F2", "A#2", "D#3", "G3", "C4"],
  dropB: ["B1", "F#2", "B2", "E3", "G#3", "C#4"],
  dStandard: ["D2", "G2", "C3", "F3", "A3", "D4"],
  cStandard: ["C2", "F2", "Bb2", "Eb3", "G3", "C4"],
};