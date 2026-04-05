export type NaturalNote = "A" | "B" | "C" | "D" | "E" | "F" | "G"; 

export type Accidental = "b" | "#" | "bb" | "##";

export type Note = `${NaturalNote}${Accidental | ""}`;