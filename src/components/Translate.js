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
  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select A Country"
      />
    </div>
  );
};

export default Translate;
