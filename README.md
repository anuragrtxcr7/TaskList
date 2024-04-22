# Welcome to the TODO TaskList APP!

This Task App is a simple Todo list app built with React, JavaScript, Tailwind CSS, Material UI and Context API.

## [Deployment Link](https://task-list-psi-liard.vercel.app/)

# Installation

1. Clone the repo.
2. Once you are in the `TaskList/` directory, run:

```
npm i
```

3. Once all the dependencies are installed, you can locally run the project by running:

```
npm run dev
```

4. The default port for deployment is `localhost:5173`.

# React + Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Overview of the project

- Its a Todo List website where we can add, edit, delete, complete a todo.
- The progress remains stored in local storage.
- It includes Filter Button that lets us Filter Tasks based on ALL tasks, Completed Tasks and Active Tasks.
- When a Task is Marked as done Its Striken Through.
- It includes a Drag and Drop Functionlity for Websites where user can drag and drop tasks when viewing all tasks.
- Used core API Context functionalities.

# Packages/Dependencies

Here were all the libraries, dependencies, dev dependencies, and packages I used for creating this project: -

- "@emotion/react": "^11.11.4"
- "@emotion/styled": "^11.11.5"
- "@mui/material": "^5.15.15"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "@vitejs/plugin-react": "^4.2.1",
- "autoprefixer": "^10.4.19",
- "eslint": "^8.57.0",
- "eslint-plugin-react": "^7.34.1",
- "eslint-plugin-react-hooks": "^4.6.0",
- "eslint-plugin-react-refresh": "^0.4.6",
- "postcss": "^8.4.38",
- "tailwindcss": "^3.4.3",
- "vite": "^5.2.0"

# Page Load Time

- Page load time measures how long it takes for the contents of a website to show up in the user’s browser. The loading process of a website will consist of multiple milestones, for example starting to show text or displaying a hero image.

- For this website I measured the Page Load time after deploying this website and measured its data from Google’s Page speed insights.
- My First Contentful Paint came out to be 0.7s
- MY Largest Contentful Paint came out to be 0.7s
- My Total Blocking time was 0 sec
- My speed index was 0.8 sec

- The page load time of website depends on the Server Response time, download Sizes and Rendering Times.

# Considerations

## 1. Using Vite 

- Vite JS is majorly used to set up a development environment for various frameworks like React.
- Reason for me using it includes faster development server initialization, minimized waiting periods for file updates, enhanced build performance, CSS code splitting and comprehensive framework compatibility, ensuring a smooth development journey

## 2. Using Tailwind CSS

- Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup
- I implemented it because it has faster development process, easily customizable utilities and components, small overall file size for production, and also has Good documentation.
- I infact did all my styling through inline class styling in Tailwind as it's much faster

## 3. Using Material UI Buttons/UI

- Material UI is an open-source React component library that implements Google's Material Design. 
- It provided me with a range of pre-built components such as buttons, inputs, and forms.
- The Filter Buttons I used for All, Completed and Active Tasks was from Material UI because it has ready made buttons for success and pending functions (green and red respectively)

## 4. Using Context API

- Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. 
- It's a way for a React app to effectively produce global variables that can be passed around. 
- This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on and hence I used it because I had Various Components and Passing data from components to individual todo task item can affect performance and can also make code readiblity inefficient.

## 5. Added Drag and Drop Functionality

- This functionality was added so that user could drag and drop his tasks whenever they visit the website.
- It add's much more interactivity.
- Currently it works on all task feature and on website mode only.

## 6. Added Filter Task Buttons

- I made Filter buttons so that user can access :-
- All Tasks - that were created by the user
- Completed tasks - that were marked as completed by the user
- Pending Tasks - On which the user is set to Take Action
- I did this so User could Have easy navigation around his/her tasks

## 7. Adding CRUD functionalities on Items

- I added all basic functionlities like Creating a new Task, Reading Different Task, Updating a created Task and Deleting a task along with Toggle Check Function.
- I did this so user can easily categorize all his/her tasks and take action regarding it

## 8. Using Local Storage

- I did Local Storage to This application so that whenever goes on to this app from the same device so his/her data does not resist and can stay persistant

## 9. Added Resonsiveness

- Responsive apps refer to creating a website that can be accessed from a desktop, mobile, or any interface.
- I added Responsiveness by making all the items align evenly with flex and flex-wrap styling along setting a min-width to the body if the width went too small

## 10. Added Comments Along the File

- I added comments along the way of making my Project because it made the Project much more readible, any one could follow along and makes it production ready


