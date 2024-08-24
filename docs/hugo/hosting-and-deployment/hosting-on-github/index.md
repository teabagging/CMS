---
title: Host on GitHub Pages
description: Host your site on GitHub Pages with continuous deployment using project, user, or organization pages.

---

## Prerequisites

1. [Create a GitHub account]
2. [Install Git]
3. [Create a Hugo site] and test it locally with `hugo server`.

[Create a GitHub account]: https://github.com/signup
[Install Git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[Create a Hugo site]: /getting-started/quick-start/

## Types of sites

There are three types of GitHub Pages sites: project, user, and organization. Project sites are connected to a specific project hosted on GitHub. User and organization sites are connected to a specific account on GitHub.com.


See the [GitHub Pages documentation] to understand the requirements for repository ownership and naming.

[GitHub Pages documentation]: https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites


[GitHub Pages documentation]: https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites

## Procedure

Step 1
: Create a GitHub repository.

Step 2
: Push your local repository to GitHub.

Step 3
: Visit your GitHub repository. From the main menu choose **Settings**&nbsp;>&nbsp;**Pages**. In the center of your screen you will see this:



Step 5
: Create an empty file in your local repository.

```text
.github/workflows/hugo.yaml
```

Step 6
: Copy and paste the YAML below into the file you created. Change the branch name and Hugo version as needed.


# Sample workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches:
      - main

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

