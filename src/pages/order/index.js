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
        <div className='container'>
          <h2 className='page-content-title has-text-centered'>This Month's Flavors</h2>
          <div className='columns'>
            <div className='column'>
              <div className='card'>
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content'>
                  <span className='flavor-title title is-family-special'>Chocolate chip cookies</span>
                  <p className=''>Chocolatey goodness. Available in Gluten-Free, Vegan, and Chocolate Chip.</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content'>
                  <span className='flavor-title title is-family-special'>Matcha brownies</span>
                  <p className=''>Chocolatey goodness. Available in Gluten-Free, Vegan, and Chocolate Chip.</p>
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='card'>
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content'>
                  <span className='flavor-title title is-family-special'>Blueberry cupcakes</span>
                  <p className=''>Chocolatey goodness. Available in Gluten-Free, Vegan, and Chocolate Chip.</p>
                </div>
              </div>
            </div>

          </div>
          <div className='has-text-centered'>
            <button className='button is-medium is-primary'>See Past Orders</button>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='container'>
          <h2 className='page-content-title has-text-centered'>Request an Order</h2>

          <div className='columns is-multiline is-vertical is-centered'>
            <div className='column is-three-quarters-desktop is-four-fifths-fullhd'>
              <div className='notification'>
                Please note: Order requests must be placed at least one week in advance. Orders are available for pickups only.
              </div>
            </div>
            <div className='column is-three-quarters-desktop is-four-fifths-fullhd'>
              <OrderRequestForm onSubmit={e => console.log('Order submitted', e)} />
            </div>
          </div>
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
