import React from 'react'
import styled from '@emotion/styled'
import EmblaCarousel from './swiper/swiper'

const SwiperSection = styled.div`
    margin: 4rem 6rem;
    h1{
        color:white;
        text-transform:uppercase;
        font-size: 1.8rem;
        letter-spacing: 5px;
    }
`
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Swiper() {
  return (
    <SwiperSection>
        <h1>What Clients say about me</h1>
        <EmblaCarousel slides={slides} />
    </SwiperSection>
  )
}

export default Swiper