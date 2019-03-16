import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import PageHeader from '../PageHeader'

const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <PageHeader title={title} />
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-4'>
              <figure className='image is-3by4'>
                <img className=''
                  src='https://placeimg.com/600/900/people'
                  alt='About Me' />
              </figure>
            </div>
            <div className='column'>
              <div className='section'>
                <h2 className='page-content-title'>Behind the bake</h2>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
