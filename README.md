# To-Do List React

A simple React task manager for creating, filtering, updating, and deleting to-do items. Tasks are saved in the browser with `localStorage`, so they remain available after a page refresh.

## Features

- Add tasks with a title and description
- Persist tasks in browser `localStorage`
- Filter tasks by `All`, `Pending`, `Active`, and `Completed`
- Change task status with a confirmation dialog
- Delete tasks with a confirmation dialog
- Floating action button for opening the add-task modal
- Responsive component-based UI built with React

## Tech Stack

- React 19
- Create React App / `react-scripts`
- CSS modules by component folder
- Web Vitals
- React Testing Library

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation

```bash
npm install
```

### Run the App

```bash
npm start
```

The development server runs at:

```text
http://localhost:3000
```

### Run Tests

```bash
npm test
```

### Build for Production

```bash
npm run build
```

The production-ready files are generated in the `build` folder.

## Project Structure

```text
to-do-list-react/
├── public/
│   ├── index.html
│   ├── logo.png
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── AddTask/
│   │   ├── Confimation/
│   │   ├── FAB/
│   │   ├── Footer/
│   │   ├── NavBar/
│   │   ├── Todo/
│   │   └── Todos.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## How It Works

`App.js` owns the task list state and stores it in `localStorage` under the `task` key. The main components receive state and callbacks through props:

- `NavBar` changes the current task filter.
- `Todos` filters and renders the task list.
- `Todo` displays one task and opens confirmations for delete/status actions.
- `AddTask` handles task creation through a modal form.
- `Confirmation` provides the reusable confirmation prompt.
- `FAB` opens the add-task modal.
- `Footer` renders the app footer.

Task statuses move between `pending`, `active`, and `completed` when a task is clicked and confirmed.

## Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm start`     | Starts the development server         |
| `npm test`      | Runs tests in watch mode              |
| `npm run build` | Creates a production build            |
| `npm run eject` | Ejects Create React App configuration |

## Notes

- This project uses browser storage only. There is no backend or database.
- Data is stored per browser/device.
- Clearing browser site data removes saved tasks.
