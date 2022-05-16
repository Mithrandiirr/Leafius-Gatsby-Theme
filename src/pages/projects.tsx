import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import ProjectsPage from '../components/projects'
import Seo from '../components/seo'

function Projects() {
  return (
    <Layout>
        <Seo title="M.El Yaakoubi - Projects" />
        <ProjectsPage />
    </Layout>
  )
}

export default Projects