import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Image = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width:400px;
    }
    h1{
      color:#a2d16c;
    }
    a{
      color:white;
      font-size:1.5rem;
    }
`

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title='El Yaakoubi Mohammed - 404' />
      <Image>
      <StaticImage src="../images/hj.png" alt="Error" />
      <h1>Error - 404</h1>
     <Link to="/">Home Page</Link>
      </Image>
      
    </Layout>
  )
}

export default NotFoundPage
