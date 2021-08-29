import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
  } from './Navbar.elements';



function Navbar() {
    //sets the value of click and setclick to false
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    //MobileIcon
    //function that updates the status of the click, and toggles the button
    const handleClick = () => setClick(!click) //starts the setClick fxn as unclicked
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton);
    
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
                        <NavMenu onClick={handleClick} click={click}>
                            {/* Home button */}
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>

                            {/* Services button */}
                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                                </NavLinks>
                            </NavItem>

                            {/* Products */}
                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                                </NavLinks>
                            </NavItem>

                            {/* Navitem button */}
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button onClick = {closeMobileMenu} fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
