import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const GalleryImage = ({ image }) => (
  <div className={`column is-one-quarter-desktop is-one-third`}>
    <figure className='photo--container image is-3by4'>
      <img
        className='photo--img'
        src={image.url}
        alt={image.alt}
      />
      <div className='photo--overlay'>
        <div className='photo--overlay--text is-size-4 has-text-white has-text-weight-bold'>
          {image.alt}
        </div>
      </div>
    </figure>
  </div>
)

GalleryImage.propTypes = {
  image: PropTypes.object.isRequired,
}

export default GalleryImage
