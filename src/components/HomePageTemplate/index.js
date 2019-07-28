import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import './styles.sass'
import { ORDER_PAGE } from '../common/uris'

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
                <h1 className='home--title is-family-special'>
                  with love, Ava
                </h1>
                <h2 className='is-size-4 home--subtitle'>
                  Baked straight from the heart.
                </h2>
                <Link
                  className='button is-primary is-medium'
                  to={ORDER_PAGE}
                >Place an order</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
