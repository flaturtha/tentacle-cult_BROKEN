import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

const AboutPage = () => (
  <Layout>
      <SEO title='About' />
      <Container>
        <h1 className='font-semibold text-1xl leading-normal mt-4 mx-0 mb-8 md:text-2xl lg:text-3xl md:leading-relaxed lg:leading-loose'>About</h1>
        {/* {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />} */}
      </Container>
    </Layout>
)

export default AboutPage