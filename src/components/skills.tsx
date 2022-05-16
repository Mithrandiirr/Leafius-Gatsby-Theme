import React from 'react'
import styled from '@emotion/styled'

const Container = styled.section`
  color:white;
    margin:6rem 6rem;
    @media screen and (max-width:575px) {
        margin:4rem 4rem;
          }
            @media screen and (max-width:440px) {
        margin:4rem 1rem;
          }
h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size:2rem;
    }
`
const SkillsDiv = styled.ul`
    li{
    font-size: 1.8rem;
    font-weight: 300;
    @media screen and (max-width: 635px){
        font-size: 1.5rem;
    }
    @media screen and (max-width:515px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width:390px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width:365px) {
        font-size: 1rem;
    }
    }

`
const Arrow = styled.div`
    position: absolute;
    right: 0;
    top: 962px;
    @media screen and (max-width:940px)
    {
        top: 1310px;
    }
    @media screen and (max-width:735px)
    {
        top: 1448px;
        svg {
            width: 213px;
        }
    }
    @media screen and (max-width:570px)
    {
        display:none;
    }
`
function Skills() {
  return (
    <>
        <Container>
            <h1>My skills</h1>
            <SkillsDiv>
                <li>React.js Next.js Gatsby.js</li>
                <li>Redux-toolkit/Redux-saga/Redux-thunk</li>
                <li>GraphQL</li>
                <li>Typescript</li>
                <li>ES6</li>
                <li>Firebase/Firestore</li>
                <li>Node.js Express.js</li>
                <li>MongoDB</li>
                <li>Laravel 8</li>
                <li>Figma/Adobe XD/PSD</li>
                <li>TailwindCSS/Bootstrap</li>
                <li>SCSS/LESS</li>
                <li>Styled-components/Emotion</li>
                <li>HTML5/CSS3/JavaScript</li>
                <li>Shopify/WordPress/Contentful/Strapi</li>
            </SkillsDiv>
            <Arrow>
            <svg width="360" height="419" viewBox="0 0 360 419" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.28681 104.23C60.1303 170.91 147.694 188.882 256.606 195.261C302.343 197.94 347.568 196.33 391.014 203.964C434.854 211.668 451.862 235.097 476.033 259.029C493.47 276.295 515.44 291.739 525.946 312.156" stroke="#23483A" strokeWidth="3" stroke-linecap="round"/>
<path d="M26.1788 104.75C20.393 103.913 14.56 105.926 8.88424 105.024C7.90511 104.869 8.13074 106.082 8.15935 106.796C8.36391 111.902 8.6203 116.932 8.39738 122.037C8.18466 126.908 7.42772 131.732 7.08576 136.547" stroke="#23483A" strokeWidth="3" stroke-linecap="round"/>
</svg>


            </Arrow>
        </Container>
    </>
  )
}

export default Skills