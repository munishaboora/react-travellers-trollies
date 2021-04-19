import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

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

