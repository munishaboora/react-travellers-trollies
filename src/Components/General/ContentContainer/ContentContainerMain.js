import React from 'react';
import OptionsSelector from '../OptionsSelector/OptionsSelector.js';
import ResponseContainer from '../ResponseContainer/ResponseContainer.js';

// this is the prop
const ContentContainer = ({ stateOfContainer }) => {
    //just to start
    // if prop is one thing, will return data into the container
    // if prop is another thing, will return another set of data into the container
    return (
        <>
            {/* h1 will render differently based on what the prop is, whether it's true or false */}
            <h1>This is for { stateOfContainer ? "SETTERS" : "COMPLETERS" }</h1>
            {/* <OptionsSelector {/* */}
            {/* <ResponseContainer /> */}
        </>
    );
};


ContentContainer.propTypes = {
}



export default ContentContainer;