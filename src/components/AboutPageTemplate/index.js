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
          <div className='columns'>
            <div className='column is-offset-1 is-4'>
              <figure className='image is-3by4'>
                <img className=''
                  src='https://placeimg.com/600/900/people'
                  alt='About J' />
              </figure>
            </div>
            <div className='column is-6'>
              <div className='section'>
                <PageContent className='content' content={content} />
                <button className='button is-primary'>view gallery</button>
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
