import React, { useState } from "react";
import { Checkbox } from "@ginger-society/ginger-ui";

export const Example = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (newChecked) => {
    setChecked(newChecked);
  };

  return (
    <Checkbox
      label="Accept Terms and Conditions"
      checked={checked}
      onChange={handleCheckboxChange}
    />
  );
};
