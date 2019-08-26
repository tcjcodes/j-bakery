import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import PageHeader from '../PageHeader'
import bgImg from '../../../static/img/baking-business-color-859904.jpg'

const AboutPageTemplate = ({ title, content, contentComponent, imgUrl }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <PageHeader title={title} bgImg={bgImg} />
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column is-4'>
              <figure className='image is-3by4'>
                <img
                  className=''
                  src={imgUrl}
                  alt='About "with love, Ava"'
                />
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
  imgUrl: PropTypes.string.isRequired,
}

export default AboutPageTemplate
