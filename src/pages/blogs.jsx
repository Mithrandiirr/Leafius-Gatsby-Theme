import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import Seo from '../components/seo'

const BlogsSection = styled.section`
    margin: 4rem 6rem;
    @media screen and (max-width:575px) {
        margin:4rem 4rem;
          }
          @media screen and (max-width:440px) {
        margin:4rem 1rem;
          }
`
const Blog = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    gap: 2rem;
    margin-top: 2rem;
    @media screen and (max-width:1120px) {
        border-bottom: 3px solid #4a876f1c;
    }
`
const BlogImage = styled.div`
    flex: 0.5;
    @media screen and (max-width: 1260px) {
        flex: 1;
    }
   
`
const DateBlog = styled.h3`
    font-weight: 300;
    color:white;
    font-size: 1.5rem;
    margin-bottom: 0;
`

const TitleBlog = styled.h1`
    font-size:2rem;
    color:white;
    margin-top: 0;
    font-weight: 300;
`
const BlogText = styled.div`
    flex: 0.5;
    margin: 3.5rem 0;
    @media screen and (max-width: 1120px) {
        min-width: 100%;
        margin-top: -3rem;
    }
   
`
const Gatsby = styled.h2`
        font-size:1.8rem;
        font-weight: 300;
`
const TimeReading = styled.h3`
    color:white;
    font-weight:300;
    margin-top: -2rem;
`
const ButtonBlog = styled.div`
    width: 100%;
    
`
const Btn = styled.button`
     border: 0;
    background: #37df9e;
    padding: 0.4rem 1.5rem;
    font-size: 1.5rem;
    color: white;
    font-family: 'Sulphur Point';
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        background-color:#29b680;
        transition:.5s all ease-in-out;
    }
    svg{
        margin: 0 1rem;
    }
    @media screen and (max-width:287px) {
        padding: 0.4rem 0.5rem;
    }
`
const Title = styled.h1`
  color:white;
  font-size:2rem;
  margin:6rem 6rem;
  margin-bottom:-4rem;
  letter-spacing:5px;
  text-transform:uppercase;
  @media screen and (max-width:575px) {
        margin:6rem 4rem;
        margin-bottom:-4rem;
          }
          @media screen and (max-width:440px) {
        margin:6rem 1rem;
        margin-bottom:-4rem;
          }
`

function BlogsIndex() {
  const {allContentfulBlogs} = useStaticQuery(
    graphql`
      query{
        allContentfulBlogs{
        nodes{
          title
          date
          read
          tag
          picture{
            gatsbyImageData
          }
          color
        }
      }
    }
    `
  )
  return (
    <Layout>
      <Seo title='El Yaakoubi Mohammed - Blogs' />
      <Title >Blogs</Title>
    <BlogsSection>
      {allContentfulBlogs.nodes.map(node => (
<>
        <Blog>
            <BlogImage>
            <DateBlog>{node.date}</DateBlog>
            <GatsbyImage image={node.picture.gatsbyImageData} alt='Blog' />
            </BlogImage>
           
            <BlogText>
                <Gatsby css={{color: node.color}}>{node.tag}</Gatsby>
                <TimeReading>{node.read}</TimeReading>
                <TitleBlog>{node.title}</TitleBlog>
                <ButtonBlog>
                    <Btn>Read this blog
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9L21 9L21 7L0 7L0 9Z" fill="white"/>
                        </svg>
                    </Btn>
                </ButtonBlog>
            </BlogText>
        </Blog>
</>
      ))}
        
  
       
    </BlogsSection>
    </Layout>
  )
}

export default BlogsIndex