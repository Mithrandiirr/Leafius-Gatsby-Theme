import * as React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Skills from "../components/skills"
import Swiper from "../components/swiper"
const IndexPage = () => {
  return (
    <Layout >
        <About />
        <Skills />
        <Swiper />
    </Layout>
  )
}

export default IndexPage
