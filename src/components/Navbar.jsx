import React from 'react'
import styled from 'styled-components'
import { links } from '../data'

const Container = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
  overflow: hidden;
`
const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`

const MenuItemLink = styled.a`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
`

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`
const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 50,
    })
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            {links.map((link) => {
              return (
                <MenuItem key={link.id}>
                  <MenuItemLink href={link.url} onClick={handleClick}>
                    {link.text}
                  </MenuItemLink>
                </MenuItem>
              )
            })}
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
