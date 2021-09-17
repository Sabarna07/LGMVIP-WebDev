import React, {useEffect, useState} from 'react'
import {Nav,NavWrapper,NavMenu,NavItem,NavLink,Logo,MobileIcon} from './Navbar.element'
import {FaHome, FaTimes, FaUserFriends} from 'react-icons/fa'
import {RiMenu4Line,RiContactsFill} from 'react-icons/ri'

const Navbar = () => {

    const [click,setClick] = useState(false)

    const handleToggle = () =>{
        setClick(!click)
    }

    return (
        <Nav >
            <NavWrapper>
                <Logo>
                    <a href="/"><img src="/logo__1.png" alt="" /></a>
                </Logo>
                <MobileIcon onClick={handleToggle}>
                    {click ? <FaTimes /> : <RiMenu4Line />}
                </MobileIcon>
                <NavMenu click={click}>
                    <NavItem>
                        <NavLink href="/"><FaHome />Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/users"><FaUserFriends />Users</NavLink>
                    </NavItem>
                </NavMenu>
            </NavWrapper>
        </Nav>
    )
}

export default Navbar
