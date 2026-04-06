import AccidentalSelect from "./AccidentalSelect"
import KeySelect from "./KeySelect"

function FretboardSettingsWrapper() {
  return (
    <div className="FretboardSettingsWrapper flex flex-col gap-5">
      <KeySelect />
      <AccidentalSelect />
    </div>
  )
}

export default FretboardSettingsWrapper