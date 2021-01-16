# Github Trending
Sends API request to Github API to fetch repositories based on filter parameters

## Installation
To run the app
```bash
$ docker-compose up --build
```

To run the tests
```bash
//get the docker image sha
$ docker ps
$ docker exec <docker_image_sha> npm run test
```

## Backend
- [x] using typescript for the backend.
- [x] unit tests using Jest

## Frontend
- [x] SPA app with VueJs.
- [x] Styling with bootstrap

## Nginx
- using nginx as a reverse proxy 

#### Paths 
    `/backend` backend service.
    `/` frontend service