import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { Nav,
    NavbarContainer,
    Navlogo,
    MobileIcons,
    NavMenu,
    Navitem,
    NavLinks,
    NavBtn,
    NavBtnLinks } from './NavbarElements'

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

    return (
        <>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
              <Navlogo to='/' onClick={toggleHome}>dolla</Navlogo>
              <MobileIcons onClick={toggle}>
                <FaBars />
              </MobileIcons>
              <NavMenu>
                <Navitem>
                  <NavLinks to='about'
                  smooth={true} 
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >About</NavLinks>
                </Navitem>
                <Navitem>
                  <NavLinks to='discover'
                  smooth={true} 
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>Discover</NavLinks>
                </Navitem>
                <Navitem>
                  <NavLinks to='signup'
                  smooth={true} 
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>Sign Up</NavLinks>
                </Navitem>
                <Navitem>
                  <NavLinks to='services'
                  smooth={true} 
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>Services</NavLinks>
                </Navitem>
              </NavMenu>
              <NavBtn>
                <NavBtnLinks to='/signin'>Sign In</NavBtnLinks>
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
