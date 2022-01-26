import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = styled.div`
    background: #000;
    height: 80px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center !important;
    z-index: 100;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavBrand = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &.active {
        color: dodgerblue;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: dodgerblue;
    }
`

export const Bars = styled(MenuIcon)`
    /* display: none !important; */
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block !important;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 15px;
        transform: translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
    }

    ::after {
        display: inline-block;
        transform: rotate(90deg);
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 760px) {
        display: none;
    }

    @media screen and (min-width: 900px) {
        a:nth-child(2) {
            display: none;
        }
    }

    @media screen and (max-width: 900px) {
        a:nth-child(2) {
            display: flex;
        }
    }
`;

export const NavBtn = styled.button`
    display: flex;
    align-items: center;
    margin-right: 24px;
    background: #080808;
    border: none;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    margin-left: 5px;
    color: #fff; 
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    :hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: dodgerblue;
    }
`; 