import { Link } from 'gatsby'
import React from 'react'
import config from '../../data/config'
import { ORDER_PAGE } from '../common/uris'
import './styles.sass'

// aka Home Page
const IndexPage = () => (
  <section className='hero is-primary is-large home--hero-bg-img'>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <h1 className='home--title is-family-special'>
                {config.siteName}
              </h1>
              <h2 className='is-size-4 home--subtitle'>
                Baked straight from the heart.
              </h2>
              <Link
                className='button is-light is-medium'
                to={ORDER_PAGE}
              >Request an Order</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

IndexPage.propTypes = {
}

export default IndexPage

