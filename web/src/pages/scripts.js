import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/tailwind.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title='scripts' />
    <div className="container mx-auto">
      <h1 className="text-orange-500">SCRIPTS</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness. ;-(</p>
    </div>
    
  </Layout>
)

export default NotFoundPage
