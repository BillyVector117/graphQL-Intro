import compression from 'compression';
import express from 'express';
import cors from 'cors';
import schema from "./graphql/schema"
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
const app = express();
app.use(cors());
app.use(compression());

// Init ApolloServer using setting the schema
const server = new ApolloServer({
    schema,
    introspection: true
});

server.applyMiddleware({app})

// INITIALIZE APPLICATION
const PORT = 3000
const httpServer = createServer(app)
httpServer.listen({ port: PORT }, () => console.log(`Sever on port ${PORT}`))
