import * as React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Skills from "../components/skills"
import Swiper from "../components/swiper"
import Blogs from "../components/blogs"
import Seo from "../components/seo"
const IndexPage = () => {
  return (
    <Layout >
      <Seo title="M.El Yaakoubi - Home" />
        <About />
        <Skills />
        <Swiper />
        <Blogs />
    </Layout>
  )
}

export default IndexPage
