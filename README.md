# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![desktop 1440px](screenshots/desktop.png) ![mobile 375px](screenshots/mobile.png) 

### Links

- Solution URL: (https://github.com/peterbujaky/intro-component-with-signup-form)
- Live Site URL: (https://peterbujaky.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow

### What I learned

Improved on CSS, improved on responsibility (using the calc CSS function to make the error icon margin responsible), and form validations

.input__erroricon {
margin: -5rem 0 2rem calc(100% - 5rem)
}

### Continued development

Continue practicing and improve speed of completion.


## Author

- Frontend Mentor - [@peterbujaky](https://www.frontendmentor.io/profile/peterbujaky)

