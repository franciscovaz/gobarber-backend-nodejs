<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/eliasgcf/image/upload/v1588625369/GoBarber/logo_iw1v9f.svg" width="200px">
</h1>

<h3 align="center">
 NodeJS Backend - GoBarber 2k20 (new version)
</h3>

<blockquote align="center">“TO ACHIEVE WHAT OTHERS WONT, YOU HAVE TO DO WHAT OTHERS DON'T!”</blockquote>

<p align="center">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-tools">Tools</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: About the project

This is the backend to an app for a fictional beauty service provider, GoBarber.

This api provides the needs to create/view/list/update appointments between barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, etcs.

**Repository for web application**: [GoBarber Web](https://github.com/franciscovaz/gobarber-web-reactjs)<br />
**Repository for mobile application**: Comming soon

## :construction_worker: Technologies | Tools | Resources

The created app uses [Express](https://expressjs.com/), in addition to needing to configure the following tolls:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [Docker](https://www.docker.com/docker-community)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/) -> Use docker for that 😁

**Clone the project**

```bash
$ git clone https://github.com/franciscovaz/gobarber-backend-nodejs.git
```

**Access project folder**

```bash
$ cd gobarber-backend-nodejs
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Project is started!
```

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Build with ♥ by Francisco Vaz :wave: from GoStack Bootcamp of RocketSeat
