import React from 'react'
import config from '../../../data/config'
import { FB_LINK, IG_LINK } from '../common/uris'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            <a href={FB_LINK} className='icon'>
              <i className='fa-lg fa fa-facebook-square' />
            </a>
            <a href={IG_LINK} className='icon'>
              <i className='fa-lg fa fa-instagram' />
            </a>
          </p>

          <p>
            {config.copyright} {new Date().getFullYear()}.{` `}
                                                         Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a
            href='https://www.netlifycms.org'
          >Netlify CMS</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
