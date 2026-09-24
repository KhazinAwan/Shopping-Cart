# Mina-Shop

A responsive shopping cart application built with React as part of **The Odin Project** curriculum.

## Features

* Browse products fetched from the **Fake Store API**
* Add products to the cart
* Increase or decrease item quantities
* Remove products from the cart
* Display the total number of items in the cart in the navigation bar
* View the total price of each cart item
* Client-side routing between pages
* Responsive layout for different screen sizes
* Accessible semantic HTML and keyboard-friendly interactions
* Interactive hover, focus, and active states
* Sticky navigation bar

## Built With

* React
* React Router
* Vite
* HTML
* JavaScript
* Tailwind CSS

## Project Structure

The application is organized into reusable React components and uses React Context to manage cart state across the application.

### Main Pages

* **Home** — Landing page for the store
* **Shop** — Displays available products
* **Cart** — Displays products added to the shopping cart

### Main Components

* **Navbar** — Navigation links and cart item count
* **ProductCard** — Displays a product and provides quantity/add-to-cart controls
* **CartCard** — Displays a cart item and provides quantity/removal controls
* **Footer** — Application footer

## What I Learned

This project helped me practice:

* Building reusable React components
* Passing data through props
* Managing state with `useState`
* Handling side effects and data fetching with `useEffect`
* Sharing state with React Context using `useContext`
* Rendering lists with `.map()`
* Handling user interactions and events
* Working with controlled inputs
* Using React Router for client-side navigation
* Managing immutable state updates
* Styling React applications with Tailwind CSS
* Building responsive layouts with Flexbox and Tailwind CSS
* Using semantic HTML and accessibility practices
* Using Git and GitHub throughout the development process

## Future Improvements

* Add product categories and filtering
* Add product search functionality
* Add sorting options such as price and rating
* Persist the cart using `localStorage`
* Add loading and error states when fetching products
* Add a checkout page
* Improve the overall shopping experience with additional UI feedback

