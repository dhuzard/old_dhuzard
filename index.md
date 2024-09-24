---
layout: home
title: "Welcome to Damien Huzard's Personal Website"
description: "Explore my CV, Blog, and Projects in the field of neuro-physio-behaviorist studies."
permalink: /
---

# Welcome!

Hello! I'm **Damien Huzard**, a Neuro-physio-behaviorist with a passion for research and development. Explore my site to learn more about my professional journey, read my latest blog posts, and discover the projects I'm working on.

## 📁 **Sections**

<div class="tabs">
  <button class="tab-button active" data-tab="cv">
    <i class="fas fa-file-alt"></i> CV
  </button>
  <button class="tab-button" data-tab="blog">
    <i class="fas fa-blog"></i> Blog
  </button>
  <button class="tab-button" data-tab="projects">
    <i class="fas fa-project-diagram"></i> Projects
  </button>
</div>

<div class="tab-content">
  <div id="cv" class="tab-pane active">
    {% include cv_summary.html %}
  </div>
  <div id="blog" class="tab-pane">
    {% include blog_summary.html %}
  </div>
  <div id="projects" class="tab-pane">
    {% include projects_summary.html %}
  </div>
</div>

<!-- Include Tabs JavaScript -->
<script src="{{ "/assets/js/tabs.js" | relative_url }}"></script>
