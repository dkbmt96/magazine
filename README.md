# News website


A monorepo website using 
  - FE: ReactJS + Redux + Redux Thunk + Redux Toolkits (RTK)
  - BE: Nodejs + Express + Graphql
  - Database: MongoDB
  - Docker + Docker Compose to batch run

To run project

### First install all dependancies:
via Yarn:
`yarn`

### Start Dev Web:
`yarn dev:web`

### Start Dev Api:
`yarn dev:api`

### Seed data
`yarn seed`
Make sure you have own mongo database or update mongoURI from .env

### Batch run with docker compose
`docker-compose up --build`

