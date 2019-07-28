import React, {Component} from 'react'
import favicon from './assets/img/favicon.ico'

export default class HTML extends Component {
  render () {
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          <script src="https://kit.fontawesome.com/62f25f6ee6.js" />
          {/*<link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.9.0/css/all.css"
            integrity="sha384-vlOMx0hKjUCl4WzuhIhSNZSm2yQCaf0mOU1hEDK/iztH3gU4v5NMmJln9273A6Jz"
            crossOrigin="anonymous"
          />*/}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
