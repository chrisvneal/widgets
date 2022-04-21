import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    valu: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      Enter text
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select A Language"
      />
    </div>
  );
};

export default Translate;
