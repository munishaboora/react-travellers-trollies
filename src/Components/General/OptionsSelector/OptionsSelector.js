import React from "react";
import Button from "../Button/Button.js"
import OptionsSelectorStyles from "./OptionsSelectorStyles"


const OptionsSelector = () => {
  return (
      <OptionsSelectorStyles>
        <h1>This is the options selector with buttons</h1>
        <Button />
        <Button />
        <Button />
      </OptionsSelectorStyles>
  );
};



export default OptionsSelector;
