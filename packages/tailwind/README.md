# AutoForm Theme Tailwind CSS

This theme contains the Tailwind CSS compatible theme for AutoForm. It requires Tailwind CSS installation.

## Installation

This theme relies on [Tailwind CSS](https://tailwindcss.com/). Before you can use this theme, you need to make sure that Tailwind CSS is installed.

### Install Tailwind CSS

```bash
$ meteor npm install -D tailwindcss
```

Then create your Tailwind configuration file:

```bash
$ npx tailwindcss init
```

### Configure your template

Make sure your template includes Tailwind's base styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install this theme

```bash
$ meteor add communitypackages:autoform-tailwind
```

## Usage

Set the theme template:

```javascript
AutoForm.setDefaultTemplate('tailwind');
