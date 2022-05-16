import React from 'react'
import styled from '@emotion/styled'
const FooterSection = styled.footer`
    margin-top: 10rem;
    color: #6d897e;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
`
const Section = styled.section`
display:flex;
flex-direction: column;
`
function Footer() {
  return (
    <FooterSection>
        <Section>
            <span>
            El Yaakoubi Mohammed. 2022 , All rights reserved.
            </span>
            <span>
            Made with ♥ , Morocco.
            </span>
        </Section>
    </FooterSection>
  )
}

export default Footer