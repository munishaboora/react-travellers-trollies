import React from 'react';
import OptionsSelector from '../OptionsSelector/OptionsSelector.js';
import ResponseContainer from '../ResponseContainer/ResponseContainer.js';


const ContentContainer = ({/* prop here will take in information*/}) => {
    //just to start
    // if prop is one thing, will return data into the container
    // if prop is another thing, will return another set of data into the container
    return (
        <>
            <h1>This is for { {/* need to get the name of the prop */} ? "SETTERS" : "COMPLETERS" }</h1>
            {/* <OptionsSelector {/* */}
            {/* <ResponseContainer /> */}
        </>
    );
};




export default ContentContainer;