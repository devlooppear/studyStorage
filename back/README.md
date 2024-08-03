# Study Storage Back

Backend study with storage, using a bucket from Supabase.

![Node.js](https://img.shields.io/badge/node.js-14.x-brightgreen)
![npm](https://img.shields.io/badge/npm-6.x-blue)
![NestJS](https://img.shields.io/badge/nestjs-v7.6.18-red)
![Supabase](https://img.shields.io/badge/supabase-v1.0.0-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) ![Node.js](https://img.shields.io/badge/-Node.js-black?logo=node.js)
- [npm](https://www.npmjs.com/) ![npm](https://img.shields.io/badge/-npm-black?logo=npm)
- [Supabase Account](https://supabase.io/)

### Installation

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Copy the example environment file and configure your environment variables**

    ```bash
    cp .env.example .env
    ```

3. **Update the `.env` file with your Supabase credentials**

    ```env
    SUPABASE_URL='your_supabase_url'
    SUPABASE_KEY='your_supabase_key'
    ```

4. **Run the development server**

    ```bash
    npm run start:dev
    ```