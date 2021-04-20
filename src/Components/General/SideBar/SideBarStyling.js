import styled from 'styled-components';
import {link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
// import SideBtnWrap from '/.';

export const SideBarContainer = styled.aside`
position flexible;
z-index:999;
height: 50%;
width: 400px;
background: #ffc500;
align-tems: center;
top:0;
display:grid;
transition: 0.4s ease-in-out;
right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

@media screen and (max-width: 400px) {
    width: 100%;
}
`;

export const CloseIcon = styled(FaTimes)`
color: #000;
`

export const Icon = styled.div`
position: absolute;
top: 1.3rem;
right: 1.5 rem;
background: transparent;
border: transparent;
font-size:2 rem;
cursor: pointer;
outline: none;
`

export const SideBarMenu = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: repeat (1, 40px);
text-align: center;

@media screen and (max-width:480px) {
    grid-template-columns: repeat (1, 40px); 
}
`

export const SideBarLink = styled(link)`
display: flex; 
align-items: center;
text-decoration: none;
color: #000;
cursor: pointer;
transition: 0.2 ease-in-out;
list-style: none;
font-size: 1.5rem;
justify-content: center;

&:hover {
    color: #e31837;
    transition: 0.4 ease-in-out;
}
`

export const SideBtnWrap = styled.div `
justify-content: left;
display: flex; 
`

export const SideBarRoute = styled.div `
white-space: nowrap;
padding: 16px 64px;
color: #fff;
background: #e31837;
outline: none;
border: none;
cursor: pointer;
font-size: 16px;
transition: 0.4 ease-in-out;
text-decoration: none;

&:hover {
    background: #fff;
    transition: 0.4 ease-in-out;
    color: #4098d6;
}
`;