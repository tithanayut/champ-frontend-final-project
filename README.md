This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Running this project

To run this project, you will need Node.js v16 or higher and Docker installed.

1. Start the API server

```
docker compose up
```

The API server will be listening on port 3000.

2. Seed the database

```
docker compose run --rm api npm run db:reset
```

3. Install npm dependencies

```
npm install
```

4. Start the frontend development server

```
npm start
```

The frontend server will be listening on port 8080.

If you are using Node.js v18 and encountered `Error: error:0308010C:digital envelope routines::unsupported`, follow https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported.
