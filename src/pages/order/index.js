import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import bgImg from '../../../static/img/baking-flour-food-1184265.jpg'
import OrderRequestForm from '../../components/OrderRequestForm'
import PageHeader from '../../components/PageHeader'
import './styles.sass'
import PhotoGallery from '../../components/PhotoGallery'

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
]

const OrderPage = () => {
  // const {testimonials} = data.markdownRemark.frontmatter

  return (
    <div className='order-page'>
      <Helmet>
        <title>Order</title>
        <meta name='description' content='Order' />
      </Helmet>
      <PageHeader title='Order' bgImg={bgImg} />

      <div className='section'>
        <h2 className='page-content-title has-text-centered'>This Month's Flavors</h2>
        <PhotoGallery images={images} paginate={false} />
        <div className='has-text-centered'>
          <button className='button is-outlined is-primary'>See Past Orders</button>
        </div>
      </div>

      <div className='section'>
        <div className='container'>

          <h2 className='page-content-title has-text-centered'>Request an Order</h2>

          <div className='notification'>
            Please note: Order requests must be placed at least one week in advance.
          </div>

          <OrderRequestForm onSubmit={e => console.log('Order submitted', e)} />

        </div>
      </div>


    </div>
  )
}

OrderPage.propTypes = {
  // data: PropTypes.shape({
  //   markdownRemark: PropTypes.shape({
  //     frontmatter: PropTypes.object,
  //   }),
  // }),
}

export default OrderPage

// export const pageQuery = graphql`
//   query OrderPage($id: String!) {
//       markdownRemark(id: { eq: $id }) {
//           frontmatter {
//               testimonials {
//                   author
//                   quote
//               }
//           }
//       }
//   }
// `
