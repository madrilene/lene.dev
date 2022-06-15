# Lene Saile / lene.dev

This is my developer profile. It's built with Eleventy, Javascript and CSS. Based on my personal opiniated Eleventy Starter for client projects, it still brings a lot of preconfigurations I'll have to strip out. It is quite over-engineered considering the simplicity of the page.
This is also where I try new stuff, so things might be a little inconsistent and verbose.

- [Logbook](#logbook)
- [Using this](#using-this)
- [Credits and Thank yous](#credits-and-thank-yous)

## Logbook

### 22-06-15

- added learnings section with 3 books, tbc.
- made lightbulb scale up on desktop

### 22-06-13

- added 2 projects
- adjusted screenshot-sizes
- now hiding mobile screenshot on mobile devices

### 22-06-08

- uninstalling unused dependencies.
- adding

```
<meta name="generator" content="Eleventy">
```

for Leaderboards.

- Adding a tiny sound effect for light switch.

### 22-06-07

- Fixed z-index issue with lightbulb. Added web component for projects accordeon.
- Learnt that strict csp does not go well with shadow dom styles from web component. deactivated custom csp for now completely.
- Added missing bold for font outfit and preloaded them.
- added plausible.io for stats.
- **to do**: add more projects, learning section with books and courses. generally strip out unneeded filters, dependencies etc.

### 22-06-06

- Adding projects section. I still have to structure index.md more clearly.
- Adding lightbulb switch for mode-toggle.
- **to do**: Striving for a better animation and a tiny sound-effect. Changing the very basic invert filter to something that's nicer and sets prefers color scheme.

### 22-06-03

- adjusting the image shortcodes for the Eleventy Image Plugin. Deleted colorthief for background color as I consider it unnecessary.
- **to do**: Projects sections and books I read.

### 22-05-28

- first commit.

#### overall goals

- Trying to figure out the best way to implement Every Layout web components and generally to combine it with the CUBE CSS methodology.
- Striving to not use any breakpoints and generally achieve an intrinsic and fluid design.

## Using this

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

Minify JS, inline and minify CSS.

```
npm run build
```

## Credits and Thank yous

**Heydon Pickering**

I strongly orientate myself on Heydon's approaches and love his books.

- https://every-layout.dev/
- https://inclusive-components.design/

**Andy Bell**

His CSS methodology makes sense to me. I'm still working on understanding it fully and using it consistently. It also goes hand in hand with the Every Layout solutions he co-authors. An ardent opponent of the utility class framework Tailwind CSS. But has recently published an approach that incorporates Tailwind CSS into his methodology. This is built into my website and I'm working on tweaking it.
I learned how to use Eleventy in 2020 with his (now free) course.

- https://cube.fyi/
- https://github.com/hankchizljaw/CUBE-with-tailwind
- https://learneleventyfromscratch.com/

**Zach Leatherman**

He is developing Eleventy.

- https://www.11ty.dev/
- https://www.zachleat.com/

**Stephanie Eckles**

She provides a lot of resources for Eleventy and modern CSS, you can learn incredibly much from her.

- https://smolcss.dev/
- https://moderncss.dev/

**Aleksandr Hovhannisyan**

I love order and structure. Aleksandr Hovhannisyan does this in an exemplary way, which is why I based the structure of eleventy.js on his online resume and blog. Also, he writes great tutorials in his blog.

- https://github.com/AleksandrHovhannisyan

**Oliver Schöndorfer**

For his great taste and knowledge in fonts.
He introduced Charter and Outfit to me in his weekly newsletter.

- https://pimpmytype.com/

**Josh Comeau**

He created a fantastic CSS course that I am currently working through. Also, his in-depth tutorials are a great resource.

- https://www.joshwcomeau.com/tutorials/
- https://courses.joshwcomeau.com/css-for-js
