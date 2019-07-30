import React from 'react'
import PropTypes from 'prop-types'
import CalendarInput from '../Form/CalendarInput'
import './styles.sass'

const handleChange = () => {
}

const OrderRequestForm = ({ onSubmit }) => (
  <form
    className='order-request-form'
    name='contact'
    method='post'
    action='/contact/success'
    encType='application/x-www-form-urlencoded'
    data-netlify='true'
    data-netlify-honeypot='bot-field'
    onSubmit={onSubmit}
  >
    <input type='hidden' name='form-name' value='contact' />
    <div hidden>
      <label>
        Don’t fill this out:{' '}
        <input name='bot-field' onChange={handleChange} />
      </label>
    </div>
    <div className='field'>
      <div className='control'>
        <input
          className='input is-medium'
          type='text'
          placeholder='Name'
          name='name'
          id='name'
          onChange={handleChange}
        />
      </div>
    </div>
    <div className='field is-horizontal'>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <input
              className='input is-medium'
              type='tel'
              placeholder='Phone Number'
              name='phonenumber'
              id='phonenumber'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <input
              className='input is-medium'
              type='email'
              placeholder='Email'
              name='email'
              id='email'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>

    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>Chocolate Chip Cookie (Min. 12)</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <input
              className='input is-medium'
              type='number'
              placeholder='Quantity'
              name='qty1'
              id='qty1'
              value={0}
              required
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>

    <div className='field is-horizontal'>
      <div className='field-label is-medium'>
        <label className='label'>Requested By</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <CalendarInput
              className='input is-medium'
              placeholder='Requested Order Date'
              name='deadline'
              id='deadline'
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </div>


    <div className='field'>
      <div className='control'>
        <textarea
          className='textarea is-medium'
          placeholder='Allergies / Special Requests (e.g. Less sugar, no chocolate)'
          name='message'
          id='message'
          rows='2'
          onChange={handleChange}
        />
      </div>
    </div>

    <fieldset disabled>
      <div className='field is-grouped is-grouped-centered'>
        <div className='control'>
          <button
            className='button is-primary is-medium'
            type='submit'
          >
            submit
          </button>
        </div>
      </div>
    </fieldset>
  </form>
)

OrderRequestForm.propTypes = {}

export default OrderRequestForm
