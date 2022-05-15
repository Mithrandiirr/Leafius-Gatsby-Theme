import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Logo from '../logo'
const StyledHeader = styled.div`
      display:flex;
` 
const ListItems = styled.ul`
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    -ms-flex: 0.7;
    flex: 1;
    margin: 8px 0;
  a {
    font-size:1.5rem;
    text-decoration:none;
    color: white;
    &:hover{
      color:#37df9e;
      transition: .5s all ease-in-out;   }
  }
`

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <ListItems>
        <li>
          <Link to='#about-me'>About me</Link>
        </li>
        <li>
          <Link to='#about-me'>Projects</Link>
        </li>
        <li>
          <Link to='#about-me'>Blogs</Link>
        </li>
      </ListItems>
    </StyledHeader>
  )
}

export default Header