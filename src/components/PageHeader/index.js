import React from 'react'
import PropTypes from 'prop-types'

const PageHeader = ({ title }) => (
  <section className='hero is-light is-bold is-small'>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <div className='section'>
          <h1 className='title'>
            {title}
          </h1>
        </div>
        {/* <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <h1 className='title'>
                {title}
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
