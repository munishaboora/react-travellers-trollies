import styled from 'styled-components';


export const TravellersTrolliesContainer = styled.div`
 height: 100vh;
 background-size: cover;
`;

export const TravellersTrolliesContent = styled.div`
height:
max-height: 100%;
width: 100vw;
padding 0rem calc((100vw-1200px)/2);
`
export const TravellersTrolliesItems =styled.div`
display: flex;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color:#4098d6;
line-height: 1;
font-weight: bold;
flex-direction: column;
justify-content: center;
text-transform: none;

@media screen and (max-width: 650px) {
    width: 100%;
}
`
export const TravellersTrolliesH1 = styled.h1`
font-size: clamp(2.5rem,10vw, 5rem);
margin-bottom: 1 rem;
box-shadow: 3px 5px #e9ba23;
letter spacing: 2px;
`
export const TravellersTrolliesBtn = styled.button`
font-size: 1.4rem;
padding: 1 rem 4 rem;
border: none;
background: #473080;
letter spacing: 2px;
color: #4098d6;
transition: 0.2 ease-out;

&:hover {
    background: #ffc500
    transition: 0.2s ease-out;
    cursor:pointer;
    color: #fff;
}
`;
