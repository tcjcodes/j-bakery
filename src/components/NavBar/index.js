import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import './styles.sass'

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
            <Link to='/' className='navbar-item'>
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
              <Link className='navbar-item' to='/gallery'>
                Gallery
              </Link>
              <Link className='navbar-item' to='/order'>
                Order
              </Link>
              <Link className='navbar-item' to='/about'>
                About Me
              </Link>
              <Link className='navbar-item' to='/contact'>
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
