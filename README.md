# SvelteKit To-Do App

This is a demonstration of a To-Do App built with SvelteKit, incorporating Svelte Store for state management, Firebase Auth for user authentication using email and password, Cloud Firestore for storing individual to-do lists for each user, and Vercel for deploying the web application.

![captures_chrome-capture-2024-0-16](https://github.com/javigong/sveltekit-fullstack-todo-crud/assets/42308135/6e7fb523-8136-4e08-bf84-a38bc75b5bf6)

🔗 [Open live Demo](https://sveltekit-fullstack-todo-crud.vercel.app/)

## Tech Stack

- SvelteKit
- Svelte Store
- Firebase Auth
- Cloud Firestore
- Google Fonts
- Font Awesome
- Vercel

## Features

- User authentication using Firebase Auth (email and password)
- CRUD operations for managing to-do lists
- Real-time data synchronization with Cloud Firestore
- Responsive design for a seamless user experience on various devices

## Screenshots

![captures_chrome-capture-2024-0-16 (2)](https://github.com/javigong/sveltekit-fullstack-todo-crud/assets/42308135/4610ac61-4cda-47f1-85d7-c8b4d0dfdb7d)
![captures_chrome-capture-2024-0-16 (3)](https://github.com/javigong/sveltekit-fullstack-todo-crud/assets/42308135/dd47fe7b-cbae-4e9c-a2d2-9a7a3c544aa1)
![captures_chrome-capture-2024-0-16 (1)](https://github.com/javigong/sveltekit-fullstack-todo-crud/assets/42308135/0cb0aa74-fcef-486a-ae7a-50dd0d3e8703)
![captures_chrome-capture-2024-0-16 (4)](https://github.com/javigong/sveltekit-fullstack-todo-crud/assets/42308135/5b32f48d-3ff9-4181-9f79-84a84e64a1e2)
![captures_chrome-capture-2024-0-16 (5)](https://github.com/javigong/sveltekit-fullstack-todo-crud/assets/42308135/f6af9e4d-6d7a-400d-9448-b0e1781cf518)

## Installation

First, clone the project and open it with Visual Studio Code:

```bash
git clone https://github.com/javigong/sveltekit-fullstack-todo-crud.git

cd sveltekit-fullstack-todo-crud

code .
```

Then, create a .env.local file in the root of the project and configure the following environment variables:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Finally, install the npm dependencies and run the application:

```bash
npm install

npm run dev
```

Now the application is running on http://localhost:5173/ 🚀

## Deployment details

SvelteKit To-Do App deployed using Vercel:

[https://sveltekit-fullstack-todo-crud.vercel.app/](https://sveltekit-fullstack-todo-crud.vercel.app/)
