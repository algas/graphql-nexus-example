import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import { context } from './context';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  context,
  graphiql: true,
}));

export { app };
