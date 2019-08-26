import PropTypes from 'prop-types'
import React from 'react'
import { siteName } from '../../../data/config'

const SiteTitle = ({ metaTitle }) => (
  <title>{siteName} | {metaTitle}</title>
)

SiteTitle.propTypes = {
  metaTitle: PropTypes.string.isRequired,
}

export default SiteTitle
