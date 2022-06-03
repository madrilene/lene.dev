---
permalink: /index.html
layout: page
title: Home
description: 'rsdfg'
---

<div class="max-w-prose mx-auto flow">

## About me

I have always enjoyed experimenting with computers. In 2004, I tried building my first websites with HTML and CSS. Four years later, I started earning a living with my hobby. Since 2010, I have been living and working in Madrid. I have worked as a freelancer mainly on small to medium-sized business websites.

After reaching my limits with static websites, I discovered Wordpress. Theme platforms like Themeforest didn't exist yet, so I messed around with the default theme until I liked the way it looked. Next, I played around with PHP to broaden the possibilities. For a long time I didn't have the confidence to learn Javascript properly. A few years ago, I started studying it after all. Now I really enjoy experimenting with Javascript.

In 2018 I discovered Jamstack and soon after changed all my (somewhat antiquated) methods. I started integrating Git by default for all projects, tested new bundlers, CSS and Javscript frameworks and discovered the wonderful world of Continuous deployments via GitHub and Netlify. Goodbye FTP.

</div>

{% include "components/presentation.njk" %}

<div class="max-w-prose mx-auto flow">

As far as Javascript frameworks are concerned, Svelte appeals to me the most. I also want to learn using [Astro](https://astro.build/) and [Slinkity](https://slinkity.dev/).

I take accessibility and performance very seriously, testing and re-testing until the result is what I want it to be. Which is (as close as I can get to) perfect.

I'm constantly reading and learning, and I'm especially enthusiastic about everything that's happening in the areas of Jamstack, accessibility and performance. I don't consider myself an expert anywhere, as I'm constantly optimising and every field is incredibly large. But I am a quick and flexible learner and have no trouble familiarising myself with new methods and techniques. And I am a practised solution-seeker on Google.

</div>

<div class="max-w-prose mx-auto flow">

## Tools

These are the tools I work with or have worked with in the past. Bold indicates higher preference/proficiency.

</div>

<article class="grid">
{%- for tool in tools -%}
<div class="box boxborder">
  <h3 class="text-lg uppercase pb-size-1"> {{ tool.division }}</h3>
  <ul role="list" class="text-lg">
{%- for item in tool.preference -%}
  <li>
  <strong>  {{ item }}  </strong>
  </li>
    {%- endfor -%}

    {%- for item in tool.possible -%}

  <li>
    {{ item }}
  </li>
    {%- endfor -%}
  </ul>
  </div>
    {%- endfor -%}
</article>

<!-- <div class="max-w-prose mx-auto flow">

## Projects

Projects I finished recently.
{%- for project in collections.projects -%}

  <h3 class="text-lg uppercase"> {{ project.data.title }}</h3>

<p>{{ project.data.description}}</p>

{%- endfor -%}

</div -->
