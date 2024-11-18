import { useState } from "react";

function toCamelCase(input) {
  return input
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

export default function Input({ label, values, onInputValueChange }) {
  const id = toCamelCase(label);
  const handleChange = (event) => {
    onInputValueChange(id, event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="number" value={values[id]} onChange={handleChange} />
    </div>
  );
}
