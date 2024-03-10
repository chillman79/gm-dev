---
title: How contribute to GameMaker Dev!
description: Learn how to contribute
author: Chillman79 
---
# How to Contribute to GameMaker Dev

Thank you for your interest in contributing to Game Maker Dev! If you have a library, code snippet, game, or any content related to Game Maker that you would like to share, we are delighted to receive your contribution. Here's how you can do it using Nuxt Content and GitHub.

## Pre-requisites

- Have a GitHub account.
- Basic knowledge of Markdown for writing your article.
- Familiarity with the Pull Request process on GitHub.

## Steps to Contribute

### 1. Clone the Repository

Clone the repository to your local machine so you can work on your article.

```bash
git clone https://github.com/chillman79/gm-dev
cd gm-dev
```

### 2. Create a New Branch

Create a new branch for each new feature or article.

```bash
git checkout -b your-branch-name
```

### 3. Add Your Article

- Create a new `.md` file inside the blog content folder, under `content/` and the appropriate category.
- Name your file, for example, `your-title.md`.
- Write your article using Markdown. Make sure to follow the blog's style and formatting guidelines.

### 4. Preview Your Article

If you have Nuxt installed locally, you can preview your article to make sure it looks as expected.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser to see your article on the blog.

### 5. Commit Your Changes

Once you are satisfied with your article, commit your changes.

```bash
git add .
git commit -m "Add new article: Your Title"
```

### 6. Push to GitHub

Push your changes to your repository on GitHub.

```bash
git push origin your-branch-name
```

### 7. Create a Pull Request

- Go to the original blog repository on GitHub.
- Click on "Pull requests" and then on the "New pull request" button.
- Select your branch and click on "Create pull request".
- Add a descriptive title and a detailed description of your contribution.
- Submit the Pull Request.

## Review and Publication

We will review your Pull Request. They may request changes or improvements before merging and publishing your article. Once approved, your article will be published on the Game Maker Dev community to enjoy.

Thank you for contributing!
