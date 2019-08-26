import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import SiteTitle from '../components/SiteTitle/SiteTitle'
import * as aboutImg from '../../public/img/about_v0.jpg'

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <div>
      <Helmet>
        <SiteTitle metaTitle={post.frontmatter.meta_title} />
      </Helmet>
      <AboutPageTemplate
        label={post.label}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        imgUrl={aboutImg}
      />
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
