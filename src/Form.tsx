import { useState, type ChangeEvent } from "react";
import hexRgb from "hex-rgb";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    setInputValue(targetValue);
    if (targetValue.length === 7) {
      if (/\#[0-9a-f]{6}/.test(targetValue)) {
        setColor(hexRgb(targetValue, { format: "css" }));
      } else {
        setColor("Ошибка!");
      }
    }
  }

  return (
    <form className="form" style={{backgroundColor: color}}>
      <input
        className="form_text-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="form_converted-value">{color}</div>
    </form>
  );
}