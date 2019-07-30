import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'
import GalleryImage from './GalleryImage'

const PhotoGallery = ({ images, paginate, onClick }) => (
  <div className='photo-gallery'>
    <div className='columns is-multiline is-centered'>
      {images.map((img) => <GalleryImage image={img} key={img.url} />)}
    </div>
    {paginate && <div className='has-text-centered'>
      <button className='button is-primary is-outlined' onClick={onClick}>See More</button>
    </div>}
  </div>
)

PhotoGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  paginate: PropTypes.bool.isRequired,
}

export default PhotoGallery
