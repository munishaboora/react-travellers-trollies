import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family:'Overpass',sans-serif;
    ${"" /* background-color:"#473080"; */}
    text-decoration: none;
    color:#f9dd5d;
}
`;