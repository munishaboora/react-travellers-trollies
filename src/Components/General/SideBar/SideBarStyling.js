import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
// import SideBtnWrap from '/.';

export const SideBarContainer = styled.aside` //Side bar chnage here
position: fixed;
z-index:999;
height: 20%;
width: 100%;
background: #473080;
align-tems: center;
top:0;
left:0;
display:grid;
transition: 0.3 ease-in-out;
top: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

@media screen and (max-width: 400px) {
    width: 100%;
}
`;

export const CloseIcon = styled(FaTimes)`
color: #ffc500;
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

export const SideBarLink = styled(Link)`
display: flex; 
align-items: center;
text-decoration: none;
color: #ffc500;
cursor: pointer;
transition: 0.2 ease-in-out;
list-style: none;
font-size: 1.5rem;
justify-content: center;

&:hover {
    color: #4098d6;
    transition: 0.2 ease-in-out;
}
`

export const SideBtnWrap = styled.div `
justify-content: center;
display: flex; 
padding: 20px;
`

export const SideBarRoute = styled.div `
white-space: nowrap;
padding: 16px 32px;
color: #fff;
background: #ffc500;
outline: none;
border: none;
cursor: pointer;
font-size: 16px;
transition: 0.2 ease-in-out;
text-decoration: none;

&:hover {
    background: #4098d6;
    transition: 0.2 ease-in-out;
    color: #ffc500;
}
`

