# j-bakery
Website for local business. Built with [Gatsby v2](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) powered generic business website starter based on [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features
Created from [Gatsby Starter Business](https://gatsby-starter-business.netlify.com)

* Complete Business Website Suite - Home Page, About Page, Pricing Page, Contact Page and Blog
* Netlify CMS for Content Management
* SEO Friendly (Sitemap, Schemas, Meta Tags, GTM etc)
* Bulma and Sass Support for styling
* Progressive Web App & Offline Support
* Tags and ~~RSS Feed for Blog~~
* ~~Disqus~~ and Share Support
* ~~Elastic-Lunr Search (NEW)~~
* Pagination (NEW)
* Contact Form (Netlify Forms)
* Easy Configuration using `config.js` file

## Prerequisite
* Node
* Gatsby CLI (globally installed)

## Development

File structure:

* All content goes through [src/layouts/index.js](src/layouts/index.js)
* [static/admin/config.yml] to configure markdown like fields and file locations of content
  * Fields can be added to graphql query under [gatsby-node.js](gatsby-node.js)
* Pages under `src/pages/[name]/index.md` will be mapped and rendered by `src/templates/[name]-page.js`
  * This is configured in `gatsby-node.js`
* The templates component will wrap a component found under `src/components/[Name]Template`

## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```

## Configuratuion
To personalize and configure, open `data/config.js` file and replace the default values.

## Deployment
Deployed via Netlify.
