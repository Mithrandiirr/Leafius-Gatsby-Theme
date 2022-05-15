import React from 'react'
import PropTypes from "prop-types";
import Header from '../header';
import styled from '@emotion/styled';
import '../../styles/global.css'
const LayoutDiv = styled.div`
       max-width: 1320px;
       width: 100%;
       margin-right: auto;
    margin-left: auto;
    margin: 4rem 6rem;
`
type LayoutProps = {
    children: React.ReactNode;
}

const Layout=({children}: LayoutProps) => (

   <LayoutDiv>
    <Header />
    {children}
   </LayoutDiv>
  );



export default Layout