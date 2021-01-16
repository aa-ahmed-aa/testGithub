# testGithub
sends API request to Github API to fetch repositories based on filter parameters

## Installation
To run the app
```bash
$ docker-compose up --build
```

To run the tests
```bash
$ docker ps => AND SAVE <BACKEND_IMAGE_SHA> 
$ docker exec <BACKEND_IMAGE_SHA> npm run test
```

## Backend
- [x] using typescript for the backend.
- [x] unit tests using Jest

## Frontend
- [x] SPA app with VueJs.
- [x] Styling with bootstrap

## Nginx
- using nginx as a reverse proxy and hide the backend behind `/backend` endpoint.