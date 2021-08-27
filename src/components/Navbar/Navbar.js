import React, { useState } from 'react';
import { Nav, 
         NavbarContainer,
         NavLogo,
         NavIcon } from './Navbar.elements';



function Navbar() {
    //sets the value of click and setclick to false
    const [click, setClick] = useState(false)

    //MobileIcon
    //function that updates the status of the click, and toggles the button
    const handleClick = () => setClick(!click) { //starts the setClick fxn as unclicked

    }




    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    {<MobileIcon onClick = {handleClick}> {/*uses the handleClick fxn */}
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon> }
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
