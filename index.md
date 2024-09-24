---
layout: home
title: "Welcome to Damien Huzard's Personal Website"
description: "Explore my CV, Blog, and Projects in the field of neuro-physio-behaviorist studies."
permalink: /
---

# Welcome!

Hello! I'm **Damien Huzard**, a Neuro-physio-behaviorist with a passion for research and development. Explore my site to learn more about my professional journey, read my latest blog posts, and discover the projects I'm working on.

## 📁 **Sections**

- [Curriculum Vitae](/cv/)
- [Blog](/blog/)
- [Projects](/projects/)
- [Contact](#contact)

## 📝 **Latest Blog Posts**

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
