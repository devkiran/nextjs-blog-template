---
title: How to Setup Tailwind CSS with HTML
publishedAt: '2022-01-24'
description: In this article, I'll show you how to install and setup the Tailwind CSS with your HTML project. It is easier than you think.
---

In this article, I'll show you how to install and setup the Tailwind CSS with your HTML project.

### Create a new project

Let's create a new folder `tailwind-html` and change directory to the newly created one.

```bash
mkdir tailwind-html

cd tailwind-html
```

### Create a package.json file

```bash
npm init -y
```

### Install the Tailwindcss dependencies

```bash
npm install tailwindcss@latest

npm install autoprefixer@latest

npm install @tailwindcss/forms
```

### Create the Tailwind configuration file

```bash
npx tailwindcss init
```

### Update the package.json file

Open the package.json file and make the following changes.

```javascript
"scripts": {
    "build-css": "tailwindcss build src/styles.css -o public/styles.css"
}
```

### Update the `tailwind.config.js`

Open the `tailwind.config.js` file and replace the content with the following code.

```javascript
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
```

### Add Tailwind plugins

Create a new folder `src` in the project root and new file `styles.css` in the `src` folder.

Add the following content to the `styles.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Build the Tailwind CSS

You should run the command `npm run build-css` to build the css. This command create a new folder `public` with a file `styles.css`.

You should link `styles.css` in your HTML pages.

```html
<link rel="stylesheet" href="styles.css" />
<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
```
