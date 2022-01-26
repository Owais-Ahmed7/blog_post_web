import { useState } from "react";
import Menu from "./Menu";
import { 
      Navbar,
      Nav,
      NavBrand,
      Bars, 
    } from "./NavbarElements";
import Container from '@mui/material/Container';

const Navigationbar = () => {

    const [toggleClick, setToggleClick] = useState(false)

    function responsiveHandling() {
        setToggleClick(!toggleClick);
    }

    return <>
        <Navbar>
            <Container>
                <Nav>
                    <NavBrand to="/">
                        Medium
                    </NavBrand>
                    <Bars onClick={responsiveHandling} toggle={toggleClick} />
                    {/* Nav Menu */}
                    { toggleClick ? <Menu toggleValue={toggleClick} /> : null }
                </Nav>
            </Container>
        </Navbar>
    </>
}

export default Navigationbar;