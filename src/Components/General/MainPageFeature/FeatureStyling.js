import styled from 'styled-components';
import FeaturePic from '../../../images/FeaturePic.png';

export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${FeaturePic});
height: 100vh;
max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #473080;
taxt-align: center;
padding: 0 1 rem;

h1{
    font-size: clamp(3rem, 5vw, 5rem);
}

p{
    margin-bottom: 1 rem;
    font-size: clamp(3rem, 5vw, 5rem);
}


`