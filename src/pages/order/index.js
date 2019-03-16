import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Testimonials from '../../components/Testimonials'
import PageHeader from '../../components/PageHeader'
import './styles.sass'

const testimonials = [
  {
    quote: 'Donec scelerisque magna nec condimentum porttitor. Aliquam vel diam sed diam luctus pretium. \n' +
        'Sed quis egestas libero. Vestibulum nec venenatis ligula. ',
    author: 'Jane Ramos',
  },
  {
    quote: 'Fusce porttitor vulputate enim, nec blandit magna gravida et. Etiam et dignissim ligula. \n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Joe Lee',
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
      <PageHeader title='Order' />

      <div className='section'>

        <div className='container'>
          <div className='columns is-centered is-multiline'>
            <div className='column is-full'>
              <h2 className='page-content-title has-text-centered'>requesting an order</h2>

              <div className='order-request-section content is-medium has-text-centered'>
                <p>To place an order, please ipsum dolor sit amet, consectetur adipiscing elit. Donec porta justo justo,
                   non semper odio cursus in. Curabitur ligula tortor, tristique non odio nec, imperdiet
                   mattis leo.</p>
                <p>Vivamus aliquam rhoncus tortor vitae convallis. Aliquam non dui nibh. Nam
                   a velit at enim sagittis pellentesque.</p>
                <button className='button is-outlined is-primary'>See Past Orders</button>
              </div>
            </div>

          </div>

          <div className=''>
            <h2 className='page-content-title subtitle has-text-centered'>Testimonials</h2>
            <Testimonials testimonials={testimonials} />
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
