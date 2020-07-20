# Containerize NodeJS App
Warm up, creating simple services with node, docker and nginx

## Docker structure
- docker-compose on root of project
- Dockerfile for each services
- for more details u can see at Project file tree

## App Description
-   Backend services with ExpressJS
    -   using express framework to create simple json API for front end
-   Front End with ReactJS
    -   using ReactJS to fetch and display Backend services API
-   Web services with Nginx
    -   create simple port binding with backend and front end services

## Project File Tree
- [README.md](README.md)
- [docker\-compose.yml](docker-compose.yml)
- __client__
    - [Dockerfile](client/Dockerfile)
    - [README.md](client/README.md)
    - __public__
    - __src__
      - [index.js](client/src/index.js)
- __nginx__
    - [Dockerfile](nginx/Dockerfile)
    - [default.conf](nginx/default.conf)
- __server__
    - [Dockerfile](server/Dockerfile)
    - [index.js](server/index.js)
    - [package\-lock.json](server/package-lock.json)
    - [package.json](server/package.json)