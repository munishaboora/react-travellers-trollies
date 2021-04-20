import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {BsPeopleCircle} from 'react-icons/bs';

export const CompanyLogo = styled.nav`

`;

export const Nav = styled.nav`
background: transparent; /*Fix*/
font-size: 35px;
color: #f9dd5d;
display: flex;
${'' /* justify-content: center; */}
`;

export const NavLink = styled(Link)`
colour: #f9dd5d;
font-size: 2rem;
font-weight: bold;
display: flex;
align-items: center;
cursor: pointer;

@media screen and (max-width: 500px) {
    position: absolute;
    top: 10px;
    left: 50px;
}
`;


export const NavIcon = styled.div`
display: block;
position: absolute;
top:0;
right:0;
cursor: pointer;
color:#fff;



p {
transform: translate(-175%,100%);
font-weight: bold;
font-size: 20px;
color: #f9dd5d;
position: right;
}
`;

export const Bars = styled(BsPeopleCircle)`
font-size: 2rem;
transform: translate(-420%,-85%); 
${'' /* //Changes positioning of person icon relative to text */}
color: #f9dd5d;
`;