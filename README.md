# Advice Generator App

This is a simple advice generator app built with React. It fetches random advice from the Advice Slip JSON API and displays it on the screen. The user can generate new advice by clicking a button.
This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Project Structure

The project is structured into several React components:

- `Main.jsx`: This is the entry point of the app. It renders the `App` component into the root div in `index.html`.

- `App.jsx`: This is the main component of the app. It maintains the state of the advice counter and renders the `Advice` component and a button to generate new advice.

- `Advice.jsx`: This component fetches a random advice from the API whenever the advice counter changes and displays it on the screen. It also renders the `AdviceCounter` component.

- `AdviceCounter.jsx`: This component displays the ID of the current advice.

## Built with:

- **Vite + React**

## Learnings

While building this project, I learned about:

- **React Hooks**: I used the `useState` and `useEffect` hooks for managing state and side effects in my functional components.

- **Fetching API Data**: I learned how to fetch data from an API in a React app using the `fetch` function inside a `useEffect` hook.

## How to Run

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.

Enjoy the random advice!
