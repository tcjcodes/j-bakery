import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import './styles.sass'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-large home--hero-bg-img'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
                <h2 className='subtitle'>
                  Hero subtitle lorem ipsum dolores
                </h2>
                <a className='button is-white is-large home--hero-btn'>See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className='section section--gradient'>
      <div className='container is-medium'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  // testimonials: PropTypes.array,

}

export default HomePageTemplate
