import React from 'react' 
import { graphql, StaticQuery } from 'gatsby' 
import styled from 'styled-components'

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: white;
    margin: auto 0;
`
const SiteTitle = styled.div`
    flex-grow: 1;
    color: white;
`
const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
      
    `} render={props => (
        <SiteInfoWrapper>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </SiteTitle>
        </SiteInfoWrapper>
    )} />
)

export default SiteInfo