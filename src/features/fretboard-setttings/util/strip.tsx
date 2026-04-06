import type { Note } from "../../../types/Notes";

function strip(note: Note) {
  return note.replace(/[#b]/g, "");
}

export default strip;
