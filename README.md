# React · Portfolio Website

A modern responsive portfolio website built with React that showcases projects in UI/UX design and development.

## About The Project

This project is a web application prototype built with React. Developed as part of my Vocational Training Advanced Level in Computing – Multi-platform Application Development course. While the project also touches on responsive design, interactive features, and other modern web technologies, its primary focus is on deepening my skills in React. It serves as a dynamic learning environment where I experiment with React components, state management, and best practices in modern web development. The website includes:

- A home page with an introduction, statistics, and a profile image.
- A portfolio section dynamically generated from an array of project objects.
- A contact page featuring an interactive map powered by React Leaflet, along with contact details and a contact form.
- A blog page that displays articles on design, development, and tech tips using a reusable blog component.
- An RSS Feed page providing a syndication feed of blog content.

## Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS (Flexbox & Media Queries)

## Features

- **Responsive Design:** Built with Flexbox and media queries to ensure a smooth user experience on all devices.
- **Dynamic Content:** Projects are rendered dynamically from a JSON array passed as props.
- **Interactive Map:** Location map integrated with React Leaflet.
- **Modern UI:** Inspired by contemporary design trends with a focus on simplicity and clarity.
- **RSS Feed:** A dedicated page offering an RSS feed of blog content for content syndication.
- **Comments CRUD with Authentication:** 
  - Blog comments are fully managed through Firestore with integrated Create, Read, Update, and Delete operations.
  - Only authenticated users can add comments.
  - Each user is only allowed to edit or delete their own comments, ensuring that no user can modify another's content.


**RSS Items Links**
![Screenshot](public/rss-screenshot.png)


## Getting Started

To get a local copy up and running, follow these simple steps.

**Online Demo:** [Visit the Live Site](https://porfolio-2a043.web.app/)

## Installation

1. Clone the repo:
```
   git clone https://github.com/riordi80/portfolio.git
```
2. Install NPM packages:
```
   npm install
```
## Usage

Run the development server:
```
npm run dev
```

## Third-Party Components

- **React Leaflet:** For integrating interactive maps. [React Leaflet Documentation](https://react-leaflet.js.org/)
- **React Icons:** For scalable vector icons. [React Icons Documentation](https://react-icons.github.io/react-icons/)

## Design Inspiration

The design of this website is based on a beautiful Figma template available on the community:
- [Figma Portfolio Template](https://www.figma.com/community/file/1170206889562959306)

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire and create. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

## Contact

**Richard O.**   
[GitHub](https://github.com/riordi80)

## Acknowledgements

- [tcrurav](https://github.com/tcrurav)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Figma Community Portfolio Template](https://www.figma.com/community/file/1170206889562959306)
- [Othneildrew's Best README Template](https://github.com/othneildrew/Best-README-Template)

