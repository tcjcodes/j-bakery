import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const PageHeader = ({ title, bgImg }) => (
  <section className='page-header hero is-dark is-bold is-small page-header--bg-img'
    style={{ backgroundImage: `url(${bgImg})` }}>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <div className='section'>
          <h1 className='is-family-special is-size-1'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  </section>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgImg: PropTypes.string.isRequired,
}

export default PageHeader
