import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaShoppingBasket} from 'react-icons/fa';

export const Nav = styled.nav`
background: transparent; //Fix
font-size: 35px;
font-family: Tahoma;
color: #4098d6;
display: flex;
justify-content: center;
`;

export const NavLink = styled(Link)`
colour: #4098d6;
font-size: 2rem;
display: flex;
align-items: center;
text-decorations: none;
cursor: pointer;

@media screen and (max-width: 500px) {
    position: absolute;
    top: 20px;
    left: 30px;
}
`;

export const NavIcon =styled.div`
display: block;
posituion:absolute;
top:0;
right:0;
cursor: pointer;
color:#fff;

p{
transform: translate(-175%,100%);
font-weight: bold;
}
`

export const Bar = styled(FaShoppingBasket)`
font-size: 2rem;
transform: translate(-50%,-10%);
`
