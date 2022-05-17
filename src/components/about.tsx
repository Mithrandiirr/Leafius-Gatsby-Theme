import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Container = styled.div`
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
const AboutMe = styled.div`
display:flex;
   flex-direction: row;
   flex-wrap:wrap;

`
const TextGrid = styled.div`
    font-size: 1.8rem;
    font-weight: 300;
    flex: 0.6 1 0;
    line-height: 1.6;
    @media screen and (max-width:1123px)
    {
        flex: 0.5 1 0;
    }
    @media screen and (max-width:940px) {
            flex: 1;
    }
`
const JAMStack = styled.span`
position: relative;
    &:before{
        content: '';
    position: absolute;
    width: 112px;
    height: 14px;
    top: 10px;
    z-index: -1;
    background: rgb(247 219 20 / 63%);
    @media screen and (max-width:1268px)  {
        top: 58px;
    left: -509px;
    }
    @media screen and (max-width:1123px) {
        top: 12px;
    left: 0px;
    }
    @media screen and (max-width:844px) {
        top: 58px;
    left: -509px;
    }
    @media screen and (max-width:714px) {
        top:11px;
        left:0;
    }
    
    @media screen and (max-width:449px) {
        top: 58px;
    left: -195px;
    }
    @media screen and (max-width:440px) {
        top:11px;
        left:0;
    }
    @media screen and (max-width:353px) {
        top: 58px;
    left: -195px;
    }
    @media screen and (max-width:333px) {
        top:11px;
        left:0;
    }
    @media screen and (max-width:305px) {
        top: 58px;
    left: -195px;
    }
    @media screen and (max-width:240px) {
        top:11px;
        left:0;
    }
    @media screen and (max-width:188px) {
        display:none;
    }
}


`
const FrontEnd = styled.span`
position: relative;
    &:before{
        content: '';
    position: absolute;
    width: 120px;
    height: 15px;
    top: 10px;
    /* left: 158px; */
    z-index: -1;
    background: rgb(91 79 193 / 80%);
    @media screen and (max-width:1123px)
    {
        top: 55px;
    left: -384px;
    }
    @media screen and (max-width:983px) {
        top: 12px;
    left: 0;
    }
    @media screen and (max-width:940px) {
        top: 58px;
    left: -697px;
    }
    @media screen and (max-width:901px) {
        top: 12px;
    left: 0;
    }
    @media screen and (max-width:674px) {
        top: 56px;
    left: -383px;
    }
    /* @media screen and (max-width:674px) {
        top: 56px;
    left: -383px;
    } */
    @media screen and (max-width:587px) {
        top: 12px;
    left: 0;
    }
    
    @media screen and (max-width:575px) {
        top: 56px;
    left: -383px;
    }
    @media screen and (max-width:523px) {
        top: 12px;
    left: 0;
    }
    @media screen and (max-width:440px) {
        top: 56px;
    left: -383px;
    }
    @media screen and (max-width:427px) {
        top: 12px;
    left: 0;
    }
    @media screen and (max-width:333px) {
        top: 56px;
        left: -219px;
    }
    @media screen and (max-width:291px) {
        top: 56px;
        left: -175px;
    }
    @media screen and (max-width:227px) {
        display:none;
    }
}
`
const PictureGrid = styled.div`
    width: 100%;
    margin: -4rem 0px;
    justify-content: end;
    text-align:end;
   
   @media screen and (max-width: 940px)
   {
    width: 100%;
    margin: 0rem 0px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: end;
    justify-content: center;
    text-align: center;
   }
    &:before{
    content: '';
    background-color: #37DF9E;
    width: 355px;
    height: 413px;
    position: absolute;
    transform: translate(17px, 7px);
    @media screen and (max-width:575px) {
        width:0;
        height:0;
    }
    }

    
`
const SocialIcons = styled.div`
    margin: 1rem 0;
    display: flex;
    gap: 8%;
    justify-content: end;
    fill: #668b7c;
    @media screen and (max-width:940px)
    {
    gap: 5%;
    justify-content: center;
    }
    a{
        fill: #668b7c;
    }
    svg{
        &:hover{
        fill:#37DF9E;
        transition: .5s all ease-in-out;
    }
}
`
const Div = styled.div`
        width: 100%;
    flex: 0.4 1 0;
    position: relative;
    max-width: 100%;
    @media screen and (max-width:1123px)
    {
        flex: 0.5 1 0;
    }
    @media screen and (max-width:940px)
    {
        min-width: 100%;
    }
    
`
function About() {
  return (
    <Container className='about-me'>
    <h1>About me</h1>
    <AboutMe>
        <TextGrid>
        My name is El Yaakoubi Mohammed. I’m <JAMStack>JAMStack</JAMStack> and <FrontEnd>Front-end</FrontEnd> developer.
<br />I build user interfaces and eCommerce stores. I also build full-stack applications !
<br /><br />I am currently learning more about MERN-Stack and JAMStack. I like practising pixel art in my free time .
        </TextGrid>
        <Div>
        <PictureGrid>
            <StaticImage src='../images/mem.png' alt='Picture' />
            <SocialIcons>
           <Link to='https://twitter.com/0xmithrandiir'> <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></Link>

           <Link to='https://github.com/Mithrandiirr'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link>

           <Link to='https://www.linkedin.com/in/mohammed-el-yaakoubi-52552010b/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></Link>

           <Link to='https://www.deviantart.com/dovah4olorin'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4.364v-4.364h-4.364l-.435.439-2.179 4.124-.647.437h-7.375v6h4.103l.359.404-4.462 8.232v4.364h4.509l.435-.439 2.174-4.124.648-.437h7.234v-6h-3.938l-.359-.438z"/></svg> </Link>

           <Link to='mailto: mithrandiryk@gmail.com'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg></Link>
            </SocialIcons>
        </PictureGrid>
        </Div>
      

    </AboutMe>
    {/* <div>
        <svg width="38" height="112" viewBox="0 0 38 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="34" cy="30" r="4" fill="#23483A"/>
<circle cx="19" cy="26" r="4" fill="#23483A"/>
<circle cx="4" cy="26" r="4" fill="#23483A"/>
<circle cx="34" cy="8" r="4" fill="#23483A"/>
<circle cx="34" cy="52" r="4" fill="#23483A"/>
<circle cx="34" cy="71" r="4" fill="#23483A"/>
<circle cx="34" cy="90" r="4" fill="#23483A"/>
<circle cx="34" cy="108" r="4" fill="#23483A"/>
<circle cx="19" cy="4" r="4" fill="#23483A"/>
<circle cx="19" cy="48" r="4" fill="#23483A"/>
<circle cx="19" cy="67" r="4" fill="#23483A"/>
<circle cx="19" cy="86" r="4" fill="#23483A"/>
<circle cx="19" cy="104" r="4" fill="#23483A"/>
<circle cx="4" cy="4" r="4" fill="#23483A"/>
<circle cx="4" cy="4" r="4" fill="#23483A"/>
<circle cx="4" cy="48" r="4" fill="#23483A"/>
<circle cx="4" cy="48" r="4" fill="#23483A"/>
<circle cx="4" cy="67" r="4" fill="#23483A"/>
<circle cx="4" cy="86" r="4" fill="#23483A"/>
<circle cx="4" cy="104" r="4" fill="#23483A"/>
<circle cx="4" cy="67" r="4" fill="#23483A"/>
</svg>
        </div> */}
    </Container>
  )
}

export default About