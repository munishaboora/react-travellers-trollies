import React from "react";
import Button from "../Button/Button.js"
import OptionsSelectorStyles from "./OptionsSelectorStyles"


const OptionsSelector = ({ setterPassedThrough, changeResponseContainer }) => {



  return (
      <OptionsSelectorStyles>
        {setterPassedThrough ? (
          <>
            <h1>This is the options selector with buttons</h1>
            <h3>"Display buttons for the setters should appear here"</h3>
            <Button text="Create an order" type="createOrder" onClicking={changeResponseContainer}/>
            <Button text="Check previous orders" type="previousOrder" onClicking={changeResponseContainer}/>
            <Button text="Current order" type="currentOrder" onClicking={changeResponseContainer}/>
          </>
        )
           : (
             <>
              <h1>"heading for the completers will show here to say 'no more tasks'"</h1>
             </>
           )
        }
      </OptionsSelectorStyles>
  );
};



export default OptionsSelector;
