# Todo App

A simple and responsive Todo application built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It allows users to add, toggle, and delete todos with a smooth and interactive UI.

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Optimistic UI updates for faster user experience
- Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)

## Project structure

src/
├── components/
│   └── TodoItem.tsx
├── hooks/
│   ├── useTodos.ts
│   ├── useAddTodo.ts
│   ├── useDeleteTodo.ts
│   └── useToggleTodo.ts
├── pages/
│   └── index.tsx

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

2. **Install dependencies:**

npm install

3. **Run the development server:**
npm run dev

Open http://localhost:3000 in your browser to see the app.
