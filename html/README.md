# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures content for the web and allows browsers to interpret and display text, images, links, and other elements.

---

## Table of Contents

1. [What is HTML?](#what-is-html)
2. [Basic Structure](#basic-structure)
3. [Common HTML Elements](#common-html-elements)
4. [Attributes](#attributes)
5. [Lists](#lists)
6. [Links and Images](#links-and-images)
7. [Forms](#forms)
8. [Best Practices](#best-practices)
9. [Further Reading](#further-reading)

---

## What is HTML?

HTML stands for **HyperText Markup Language**. It describes the structure of a web page using markup. HTML elements are the building blocks of HTML pages.

---

## Basic Structure

Every HTML document starts with a doctype declaration and consists of elements wrapped in angle brackets.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

---

## Common HTML Elements

- `<h1>` to `<h6>`: Headings
- `<p>`: Paragraph
- `<a>`: Anchor (links)
- `<img>`: Image
- `<ul>`, `<ol>`, `<li>`: Lists
- `<div>`: Division/container
- `<span>`: Inline container

---

## Attributes

HTML elements can have attributes that provide additional information.

Example:

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

- `href` defines the link's destination.
- `target="_blank"` opens the link in a new tab.

---

## Lists

**Unordered List**

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

**Ordered List**

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

---

## Links and Images

**Link:**

```html
<a href="https://www.github.com">GitHub</a>
```

**Image:**

```html
<img src="logo.png" alt="Site Logo">
```

---

## Forms

Forms collect user input:

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>
```

---

## Best Practices

- Always close tags properly.
- Use semantic HTML (e.g., `<header>`, `<nav>`, `<main>`, `<footer>`).
- Include `alt` attributes for images for accessibility.
- Use comments (`<!-- Comment -->`) to explain complex code.

---

## Further Reading

- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Living Standard](https://html.spec.whatwg.org/)

---
````