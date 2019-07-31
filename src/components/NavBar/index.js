import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import './styles.sass'
import { GALLERY_PAGE, ORDER_PAGE, ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE } from '../../common/uris'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query NavBarQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='container desktop'>
          <div className='navbar-brand is-family-special'>
            <Link to={HOME_PAGE} className='navbar-item'>
              {data.site.siteMetadata.title}
            </Link>
            <button
              className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
              data-target='navMenu'
              onClick={toggleNavbar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
            <div className='navbar-end'>
              <Link className='navbar-item' to={GALLERY_PAGE}>
                Gallery
              </Link>
              <Link className='navbar-item' to={ORDER_PAGE}>
                Order
              </Link>
              <Link className='navbar-item' to={ABOUT_PAGE}>
                About
              </Link>
              <Link className='navbar-item' to={CONTACT_PAGE}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
