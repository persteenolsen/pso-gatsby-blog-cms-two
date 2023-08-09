---
title: DevOps and Headless CMS
date: 2023-08-09T12:50:23.920Z
published: true
categories:
  - DevOps
  - CMS
tags:
  - headless-cms
  - git-based-cms
  - api-driven-cms
  - netlify-cms
  - decap-cms
  - tina-cms
  - strapi-cms
  - netlify-cloud
  - ci-cd
---
DevOps and Git-based Headless CMS used with my Blog

Note: 10-08-2023 - Decap CMS is replacing the Netlify CMS keeping most / all of the features - React based. 

This Blog is using a CI / CD Pipeline as an important concept of DevOps. An Editor of the Blog can use Git-based CMS for content administration while an Administrator or Developer of the Blog can use GitHub as well as VS Code.

The CI / CD Pipeline was implemented by

* The code of the Blog at GitHub
* Decap Git-based CMS / VS Code
* Netlify Cloud

How it works: 

When a developer makes a change to the code of the Blog and commit the code to GitHub by VS Code or the CMS an automated Build will happen and if no errors are detected the created files from that build will be deployed to Netlify Cloud where the Blog is hosted.

An example: A Markdown file was saved by the CMS system which starts the CI / CD Pipeline by a commit to GitHub.

To get more experience with Git based CMS and as an alternative to Netlify Cloud and Decap / Netlify CMS, a copy of the Gatsby Blog is hosted and aministrated by Gatsby Cloud and Tina CMS using another repository at GitHub.

In addition to Headless Git-based CMS I have experience with API driven CMS listed below

* Strapi - Based on Node.js
