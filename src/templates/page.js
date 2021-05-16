import React from 'react'
import Layout from '../components/layout'

export default ({ pageContext }) => (
    <Layout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <p dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
)