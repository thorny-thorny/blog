---
title: The first post
date: 2022-07-21
tags:
 - webdev
 - vuepress
 - vue
 - blog
---

Except it's not :D I challenged myself to set up a blog and make a post about the recent game jam until a particular date. This post is supposed to be the first introductory post of my blog. But blog setup and game jam [post](/post/adventure-jam-2022/) took so much time, I decided to postpone this post to complete the challenge in time.

<!-- more -->

## Idea

I wanted to have my own blog as a part of my resume for a long time. Also I wanted to have little notes, useful and not very useful posts, instructions, and maybe whole technical articles for myself to keep and for the internet to share with. I was told I’m good with words but it’s so time consuming to pick the right ones! Yet I will try to drop a post here every once in a while.

## Requirements

So the time has come to set the wheels in motion. There are some popular ready to use solutions for a blog. I could use [WordPress](https://wordpress.com/) known for security issues or [Medium](https://medium.com/) with paywall and dark patterns. But hey, I'm sort of a web developer after all :D I want my blog to be a proof I can do things on the web with my own hands.

I was thinking over different aspects of my blog earlier and now they became formalised as requirements list:

* I'm not going to make everything from scratch, that’s too much work for a blog D: I need some <span title="Content management system" style="text-decoration: dotted underline; cursor: help">CMS</span> or a site generator
* I want it to build into static HTML according to my green statement (which is to be done yet), for security reasons and nice <span title="Search engine optimization" style="text-decoration: dotted underline; cursor: help">SEO</span>
* It has to be relatively easy to extend and modify, I might want to add some custom content or embed something interactive
* It has to be convenient for technical blog posting, code highlight support is absolute minimum
* I want to control how and where the content is hosted. I might start with [NGINX](https://nginx.org/) on my server and end up with 3rd party <span title="Content delivery network" style="text-decoration: dotted underline; cursor: help">CDN</span>
* A big no for paywalls, ads, cookie banners and other abominations of the modern web. I want it to be dead simple for a visitor to reach my content
* It shouldn't be too complicated and drag gigabytes of node_modules or other dependencies around

There are plenty of simple blog-aware static site generators like [Jekyl](https://jekyllrb.com/). Also the number of options is increased by mighty web combines with <span title="Static site generator" style="text-decoration: dotted underline; cursor: help">SSG</span> support like [NextJS](https://nextjs.org/). I spent some time talking to google, briefly checking some options and comprehending the amount of work I need to do to find a suitable solution. Finally I decided to go with my favourite - [VuePress](https://vuepress.vuejs.org/).

## VuePress

[Vue](https://vuejs.org/) was the first modern-like JS framework for web I ever used. I liked the fact that it can be used right in the browser without sever-side processing. You can put the component’s code into page’s script, put the component’s template into page’s HTML, add [Vue Router](https://router.vuejs.org/) - and you get a proper <span title="Single-page application" style="text-decoration: dotted underline; cursor: help">SPA</span> ready to be served right from the disk or via a simple web server. By the way [React](https://reactjs.org/) is able to do similar things nowadays using [Babel](https://babeljs.io/) to transpile raw JSX right in the browser. What a time to be alive!

I know VuePress since I used it for documentation system. I like its clean design, neat basic features like [Markdown](https://en.wikipedia.org/wiki/Markdown)-based content, sidebars, simple offline search, and tech features like code highlight and ability to embed HTML and even custom Vue components in a content. The only disappointment was that generated HTML wasn’t suitable for serving from a disk and required a web server. I solved this issue in a terribly hacky way which is a topic for another post :D

VuePress has an official [blog plugin](https://vuepress.vuejs.org/plugin/official/plugin-blog.html). It’s pretty cool except the default blog theme barely resembles the clean VuePress design I like so much. The story of me messing around with the theme attempting to return its original beauty deserves yet another blog post, but here is my blog finally online. And my not-really-first-post not-really-opens my not-really-serious blogging career :D