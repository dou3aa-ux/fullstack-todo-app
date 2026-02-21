📝 Full-Stack Todo App
A modern, full-stack todo list application built with React, NestJS, and MySQL. Features a beautiful gradient UI with smooth animations and complete CRUD functionality
🛠️ Tech Stack
Frontend:

React 18 (with Hooks)
Vite
Axios
CSS3 (Custom animations)

Backend:

NestJS
TypeORM
MySQL

📋 Prerequisites
Before you begin, ensure you have installed:

Node.js (v16 or higher)
MySQL (v8 or higher)
npm or yarn
🚀 Quick Start
1. Clone the repository
bashgit clone https://github.com/dou3aa-ux/fullstack-todo-app.git
cd todo-app
2. Setup Database
bashmysql -u root -p
sqlCREATE DATABASE todo_db;
3. Setup Backend
bashcd todo-server
npm install

# Configure database in src/app.module.ts
# Update: username, password, database name

npm run start:dev
Backend runs on http://localhost:5000
4. Setup Frontend
bashcd todo-client
npm install
npm run dev
Frontend runs on http://localhost:5173
open browser: Navigate to http://localhost:5173 and start managing your todos


📁 Project Structure
todo-app/
├── todo-server/          # NestJS Backend
│   └── src/
│       ├── todos/
│       │   ├── dto/
│       │   ├── todo.entity.ts
│       │   ├── todos.controller.ts
│       │   ├── todos.service.ts
│       │   └── todos.module.ts
│       └── app.module.ts
│
└── todo-client/          # React Frontend
    └── src/
        ├── components/
        │   ├── TodoForm.jsx
        │   ├── TodoItem.jsx
        │   └── TodoList.jsx
        ├── hooks/
        │   └── useTodos.js
        ├── services/
        │   └── api.js
        └── App.jsx

Key Features Explained
Custom React Hook (useTodos)
Centralized state management for all todo operations with proper error handling and loading states.
TypeORM Integration
Automatic database table creation and type-safe database operations.
Responsive Design
Mobile-first approach with smooth animations and gradient backgrounds.

What I Learned

Full-stack architecture (Frontend ↔ Backend ↔ Database)
REST API design and implementation
React Hooks (useState, useEffect, useCallback)
Custom hooks for reusable logic
NestJS dependency injection pattern
TypeORM for database operations
Async/await and Promise handling
Component composition and props
CSS animations and responsive design


🐛 Troubleshooting
Backend not connecting to MySQL?

Check database credentials in app.module.ts
Ensure MySQL service is running
Verify database todo_db exists

Port already in use?
bashnpx kill-port 5000    # Backend
npx kill-port 5173    # Frontend

Author:
Assila Douaa

⭐ Star this repo if you found it helpful
