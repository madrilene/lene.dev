<h1><a href="https://starter-eleventy-tailwind3.netlify.app"><strong>Inés Alba</strong></a></h1>

<em>Eleventy · Tailwind CSS · HTML · CSS · Javascript</em>

<a href="https://app.netlify.com/sites/starter-eleventy-tailwind3/deploys"><img src="https://api.netlify.com/api/v1/badges/27819fce-1c2b-4f30-ab30-5c0769f9734e/deploy-status"></a>

## Contents

- [Contents](#contents)
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Install dependencies](#install-dependencies)
  - [Working locally](#working-locally)
  - [Creating a production build](#creating-a-production-build)

---

## Project Overview

- The project uses [Eleventy](https://11ty.dev) as a static site generator
- Default templating is [Nunjucks](https://mozilla.github.io/nunjucks/) (can be changed)
- PostCSS set up to handle:
  - TailwindCSS
  - CSS Imports
  - Autoprefixer
- PurgeCSS to remove unused CSS (set up for TailwindCSS by default) in production
- HTML minified in production
- CSS inlined and minified in production
- [esbuild](https://esbuild.github.io/) used to bundle and minify scripts
- Document `<head>` crafted using [htmlhead.dev](https://htmlhead.dev)

---

## Getting Started

### Install dependencies

```
npm install
```

### Working locally

Starts watch tasks to compile when changes detected

```
npm start
```

### Creating a production build

Minify HTML, minify JS, inline and minify CSS.

```
npm run build
```

---
