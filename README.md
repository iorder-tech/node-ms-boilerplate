# Microservice Boilerplate

## Description

This is a boilerplate for creating microservices using Node.js, TypeScript, and Fastify. The goal of this project is to provide a basic and organized structure that can be used as a starting point for developing new microservices. This boilerplate includes basic configurations for the development environment, environment variables configuration, integration with RabbitMQ, database, and other essential components.

## Requirements

- **Node.js**: Version 18 or higher
- **pnpm**: Package manager

## Project Structure

├── .github
├── .k8s
├── prisma
├── src
│ ├── config
│ ├── controllers
│ ├── middlewares
│ ├── models
│ ├── queues
│ ├── routes
│ ├── schemas
│ ├── services
│ ├── types
│ └── utils
├── .env.example
├── .eslin.config.mjs
├── .gitignore
├── .prettierrc
├── .prettierignore
├── .npmrc
├── Dockerfile
├── tsconfig.json
├── package.json
├── index.ts
└── pnpm-lock.yaml

## Features

- **Fastify**: Basic configuration and server initialization.
- **TypeScript**: Full TypeScript support.
- **RabbitMQ**: Integration with RabbitMQ for message queues.
- **Database**: Configuration for database connection.
- **Environment Variables Configuration**: Using `.env` files for environment variables configuration.
- **Modular Structure**: Organized controllers, services, models, and routes.

## Installation

1. **Clone the repository:**

```sh
git clone https://github.com/iorder-tech/node-ms-boilerplate.git
```

2. **Rename the project directory:**

```sh
mv node-ms-boilerplate new-project-name
cd new-project-name
```

3. **Remove the existing git repository:**

```sh
rm -rf .git
```

4. **Initialize a new git repository (optional):**

```sh
git init
```

5. **Install dependencies using pnpm:**

```sh
pnpm install
```

6. **Configure environment variables:**
   Copy the .env.example file to .env and fill in the required environment variables.

```sh
cp .env.example .env
```

7. **Start the server:**

```sh
pnpm dev
```

## Available Scripts

- **pnpm dev**: Starts the server in development mode.
- **pnpm build**: Compiles the TypeScript project to JavaScript.
- **pnpm start**: Starts the server using the compiled code.
- **pnpm lint**: Runs ESLint for code verification.
- **pnpm format**: Formats the code using Prettier.

## Contributing

Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For more information, contact us at: julio@iorder.com.br.
