import React from 'react'
import PropTypes from "prop-types";
import Header from '../header';
import styled from '@emotion/styled';
import '../../styles/global.css'
import Footer from '../footer';
const LayoutDiv = styled.div`
      max-width: 1920px !important;
       width: 100%;
       margin-left: auto;
        margin-right: auto;

    /* margin: 4rem 6rem; */
`
type LayoutProps = {
    children: React.ReactNode;
}

const Layout=({children}: LayoutProps) => (

   <LayoutDiv>
    <Header />
    {children}
    <Footer />
   </LayoutDiv>
  );



export default Layout