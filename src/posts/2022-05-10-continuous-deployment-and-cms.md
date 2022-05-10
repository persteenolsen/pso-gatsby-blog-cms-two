---
title: Continuous Deployment and CMS
date: 2022-05-10T12:50:23.920Z
published: true
categories:
  - DevOps
  - CMS
tags:
  - git-based-cms
  - headless-cms
  - netlify-cms
  - netlify-cloud
  - github
---
The Project of this Blog are described below and by the link "About this Blog".

This Blog is using a Continuous Deployment Pipeline as an important concept of DevOps. Git-based CMS are used for content administration.

The Continuous Deployment Pipeline is implemented by

* The code of the Blog at GibHub
* Netlify Git-based CMS / VS Code
* Netlify Cloud

When a developer makes a change to the code of the Blog and commit the code to GitHub by VS Code or the CMS an automated Build will happen and if no errors are detected the created files from that build will be deployed to Netlify Cloud where the Blog is hosted.

An example: A Markdown file was saved by the CMS system which starts the Continuous Deployment Pipeline by a commit to GitHub.

To get more experience with Git based CMS and as an alternative to Netlify Cloud and Netlify CMS, a copy of the Gatsby Blog is hosted and aministrated by Gatsby Cloud and Forestry CMS by another repository at GitHub.

In addition to Git-based CMS I have experience with the CMS listed below

* WordPress
* Drupal
* Typo3
* Umbraco
