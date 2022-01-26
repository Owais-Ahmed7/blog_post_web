import { NavMenu, NavLink, NavBtn, NavBtnLink } from "./NavbarElements";

const Menu = () => {
    return ( <>
        <NavMenu>
            <NavLink to="/">
               Home
            </NavLink>
            <NavLink to="/upload-post">
               Upload Post
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/signup">Register</NavBtnLink>
        </NavBtn> 
    </>

    )
}

export default Menu;