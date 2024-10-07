# Contributing to NetVibe

Thank you for considering contributing to this project! Here’s a set of guidelines to help you contribute smoothly.

## Getting Started

1. **Clone the repository:**

```bash
   git clone git@github.com:building-for-fun/NetVibe.git
   cd NetVibe
```

Install dependencies for frontend and backend:

For Frontend:

```bash
cd frontend
npm install
```

For Backend:

```bash
cd backend
npm install
```

Run the app using Docker Compose:

```bash
docker-compose up --build
```

Access the application:

Frontend: `http://localhost:3000`
Backend: `http://localhost:3001`

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/building-for-fun/NetVibe/issues/new) using the template provided.

## Submitting Pull Requests

1. Fork the repository.
2. Create a feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to your branch (git push origin feature/your-feature).
5. Open a Pull Request following the PR Template.

## Code Style and Testing

Follow the existing code style and conventions used in the project. For consistency, we use:

ESLint for linting JavaScript/TypeScript code.
Prettier for formatting.
Make sure your code passes all the tests by running:

```bash
npm run test
```
