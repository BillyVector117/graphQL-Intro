import compression from 'compression';
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from "./graphql/schema"
const app = express();
app.use(cors());
app.use(compression());


app.use("/", graphqlHTTP({
    // schema: schema
    schema,
    graphiql: true
}))
// INITIALIZE APPLICATION
const PORT = 3000

app.listen({ port: PORT }, () => console.log(`Sever on port ${PORT}`))
