import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import PhotoGallery from '../../components/PhotoGallery'
import PageHeader from '../../components/PageHeader'
import bgImg from '../../../static/img/baked-bakery-baking-230743.jpg'

const images = [
  {
    url: 'https://loremflickr.com/480/600/cupcake?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/cookies?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/cake?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/bake?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/macaron?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/apple+pie?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/cookie?lock=1',
    alt: 'baked good',
  },
  {
    url: 'https://loremflickr.com/480/600/matcha?lock=1',
    alt: 'baked good',
  },
]

const GalleryPage = ({data}) => {
  return (
    <div>
      <Helmet>
        <title>Gallery</title>
        <meta name='description' content='Gallery' />
      </Helmet>
      <PageHeader title='Gallery' bgImg={bgImg}/>
      <div className='section'>
        <PhotoGallery
          title={data.site.siteMetadata.title}
          images={images}
          onClick={() => console.log('clicked')}
        />
      </div>
    </div>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.object,
}

export default GalleryPage

export const galleryPageQuery = graphql`
  query GalleryPage {
      site {
          siteMetadata {
              title
          }
      }
  }
`
