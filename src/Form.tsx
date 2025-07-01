import { useState, type ChangeEvent } from "react";
import hexRgb from "hex-rgb";

export default function Form() {
  const [color, setColor] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value);
  }

  function displayColorCode(inputString: string) {
    if (color.length === 7) {
      if (/\#[0-9a-f]{6}/.test(color)) {
        return hexRgb(inputString, { format: "css" });
      } else {
        return "Ошибка!";
      }
    }
  }

  return (
    <form className="form" style={{backgroundColor: displayColorCode(color)}}>
      <input
        className="form_text-input"
        type="text"
        value={color}
        onChange={handleChange}
      />
      <div className="form_converted-value">{displayColorCode(color)}</div>
    </form>
  );
}