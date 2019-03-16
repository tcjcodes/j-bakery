import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const PhotoGallery = ({ title, images, onClick }) => (
  <div className='container'>
    <div className='columns is-multiline is-centered'>
      {images.map((img) => (
        <div className={`column is-one-quarter-desktop is-one-third`} key={img.url}>
          <figure className='photo--container image is-3by4'>
            <img className='photo--img'
              src={img.url}
              alt={img.alt} />
            <div className='photo--overlay'>
              <div className='photo--overlay--text is-size-4 has-text-white has-text-weight-bold'>
                {img.alt}
              </div>
            </div>
          </figure>
        </div>
      ))}
    </div>
    <div className='has-text-centered'>
      <button className='button is-primary is-outlined' onClick={onClick}>See More</button>
    </div>
  </div>
)

PhotoGallery.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PhotoGallery
