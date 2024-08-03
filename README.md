# Study Storage

A study project exploring storage solutions using modern technologies. This project features a frontend built with React and a backend using NestJS, integrated with Supabase for file storage.

![React](https://img.shields.io/badge/react-v18.x-brightgreen)
![NestJS](https://img.shields.io/badge/nestjs-v7.6.18-red)
![Supabase](https://img.shields.io/badge/supabase-v1.0.0-orange)
![Node.js](https://img.shields.io/badge/node.js-14.x-brightgreen)

## 🚀 Overview

This project is divided into two main parts:

- **Frontend**: A React application that interacts with the backend and displays information. The frontend is responsible for the user interface and client-side logic.
- **Backend**: A NestJS application that handles API requests and manages file storage using Supabase.

### Frontend

The frontend is built with React and includes:

- **React**: For building the user interface.
- **Vite**: For fast development and bundling.
- **Tailwind CSS**: For styling the application.

**Key Features:**

- User interface for interacting with the backend.
- Responsive design with Tailwind CSS.
- Components for layout, navigation, and footer.

**Getting Started with Frontend:**

1. **Navigate to the frontend directory**

    ```bash
    cd front
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Copy the example environment file and configure your environment variables**

    ```bash
    cp .env.example .env
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

### Backend

The backend is built with NestJS and includes:

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Supabase**: A platform that provides a Postgres database, authentication, and file storage.

**Key Features:**

- API endpoints for managing file uploads and storage.
- Integration with Supabase for handling file storage.

**Getting Started with Backend:**

1. **Navigate to the backend directory**

    ```bash
    cd back
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Copy the example environment file and configure your environment variables**

    ```bash
    cp .env.example .env
    ```

4. **Update the `.env` file with your Supabase credentials**

    ```env
    SUPABASE_URL='your_supabase_url'
    SUPABASE_KEY='your_supabase_key'
    ```

5. **Run the development server**

    ```bash
    npm run start:dev
    ```