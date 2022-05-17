import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Logo from '../logo'
import {FaSeedling} from 'react-icons/fa'
const StyledHeader = styled.div`
      display:flex;
      margin:4rem 6rem;
      @media screen and (max-width:575px) {
        margin:4rem 4rem;
          }
          @media screen and (max-width:440px) {
        margin:4rem 1rem;
          }
` 
const ListItems = styled.ul`
transition: .5s all ease-in-out;
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
    @media screen and ( max-width: 765px)
    {
      display: none;
    }
  a {
    font-size:1.5rem;
    text-decoration:none;
    color: white;
    &:hover{
      color:#37df9e;
      transition: .5s all ease-in-out;   }
  }
`
const ListItemsMenu = styled.div`
  display: none;
  @media screen and (max-width:765px) {
    display:flex;
    flex: 1;
    place-content: flex-end;
    align-items: center;
    transition: .5s all ease-in-out;
    
    svg {
      cursor: pointer;
      fill: white;
    }
  }
`
const ItemsMenuBar = styled.ul`
    display: flex;
    list-style: none;
    margin: 8px 0;
    flex-direction: column;
    position: absolute;
    top: 110px;
    gap: 0.5rem;
    transition: .5s all ease-in-out;

    a{
      font-size: 1.5rem;
      color: white;
      text-decoration:none;
    }
`
const Header = () => {
  const [menuIsOpen,setMenuIsOpen] = React.useState(false)

  const menuToggler = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <StyledHeader>
      <Logo />
      <ListItems>
        <li>
          <Link to='/'>About me</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
      </ListItems>
      <ListItemsMenu>

     {menuIsOpen
      ?<FaSeedling size={30} onClick={menuToggler} />
      :<FaSeedling size={30} onClick={menuToggler}/>
     }
     {
       menuIsOpen &&
       (
        <ItemsMenuBar>
          <li>   <Link to='#about-me'>About me</Link></li>
          <li>   <Link to='#about-me'>Projects</Link></li>
          <li>   <Link to='#about-me'>Blogs</Link></li>
        </ItemsMenuBar>
       )
     }
      </ListItemsMenu>
    
    </StyledHeader>
  )
}

export default Header