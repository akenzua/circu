# Circu

This repository is a monorepo that contains multiple applications and packages, some of the packages
are part of a microfrontend, while others will be standalone projects. The Microfrontends are series
of packages that are built to help different type of users to utilizes a family of related products to build templates for CV, use the template, apply to jobs, recieve and analyse job applications, make and recieve payments for templates, and make use of other libraries for recruitment processes.

# Package Overview

The following are the monorepo in the this monorepo:

- Application shell for all the microfrontends.
- Mould: a microfrontend that is built for designers to create reusable CV template for sale to interested users, it functions like the usual design app but optimized for CV templating
- Storybook: it houses a the design system foundation, component library and the documentation used in other part of the application.

# Getting Started

1. Install node
2. Install Git locally
3. Install yarn first
4. Clone repository

```javascript
git clone https://github.com/akenzua/circu.git

```

# Development

#### Mould

```javascript
cd circu
yarn run install:mold
yarn run start:mold
```

# Contribution

    - Branching
        To create a branch, the naming convention must be as follows:
        1. Label: This could be feature, bugfix, docs, etc, describing what the
        branch is doing

        2. Package: This is the package you worked on an if you work on multiple
        packages, separate them by forward slash as in mold/storybook, however,
        endeavour tho keep your branch to a package and if config at the rook of the monorepo, use config

        3. Branch id, this is the id from the project board

        4. Title if the branck separated by hyphen

        {label}/{package}/{branchId}-{title}
        feature/mold/001-set-up-app-shell-for-all-microfrontend

# Contact

ajibade.akintade@gmail.com
