import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, 
         NavbarContainer,
         NavLogo,
         NavIcon,
         MobileIcon,
         NavMenu,
         NavItem,
         NavLinks } from './Navbar.elements';



function Navbar() {
    //sets the value of click and setclick to false
    const [click, setClick] = useState(false)

    //MobileIcon
    //function that updates the status of the click, and toggles the button
    const handleClick = () => setClick(!click) //starts the setClick fxn as unclicked
        
    
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>        {/*turns the mobile icon (burger) into white*/}
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            ULTRA
                        </NavLogo>
                        <MobileIcon onClick = {handleClick}>        {/*uses the handleClick fxn */}
                            {click ? <FaTimes /> : <FaBars />}      {/*set the icon depending on the status click */}
                        </MobileIcon> 
                        <NavMenu onClick={handleClick}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavMenu onClick={handleClick}>
                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavMenu onClick={handleClick}>
                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
