import React, {Component} from 'react'
import { navigate } from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import PageHeader from '../PageHeader'
import './styles.sass'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactPageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    // eslint-disable-next-line
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line
      .catch(error => alert(error))
  }

  render () {
    const {title, subtitle, meta_title, meta_description} = this.props
    return (
      <div className='contact'>
        <Helmet>
          <title>{meta_title}</title>
          <meta name='description' content={meta_description} />
        </Helmet>
        <PageHeader title={title} />
        <section className='section'>
          <div className='container'>
            <div className='columns is-centered'>
              <div className='column is-three-fifths-desktop'>
                <h2 className='is-size-3 has-text-centered'>
                  Drop a message
                </h2>

                <div className='notification'>
                    Please note that lorem ipsum dolores orders X y z before they can be placed in the oven. Orders typically requrie 3 - 5 weeks notice. Et cetera.
                </div>

                <form
                  name='contact'
                  method='post'
                  action='/contact/success'
                  encType='application/x-www-form-urlencoded'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                  onSubmit={this.handleSubmit}
                >
                  <input type='hidden' name='form-name' value='contact' />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name='bot-field' onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className='field'>
                    <div className='control'>
                      <input className='input is-medium' type='text'
                        placeholder='Name' name='name' id='name' onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className='field is-horizontal'>
                    <div className='field-body'>
                      <div className='field'>
                        <div className='control'>
                          <input className='input is-medium' type='email' placeholder='Email' name='email' id='email' onChange={this.handleChange} />
                        </div>
                      </div>
                      <div className='field'>
                        <div className='control'>
                          <input className='input is-medium' type='email' placeholder='Subject' name='subject' id='subject' onChange={this.handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='field'>
                    <div className='control'>
                      <textarea className='textarea' placeholder='Message' name='message' id='message' rows='6' onChange={this.handleChange} />
                    </div>
                  </div>

                  <fieldset disabled>
                    <div className='field is-grouped is-grouped-centered'>
                      <div className='control'>
                        <button className='button is-primary is-medium' type='submit'>submit</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
