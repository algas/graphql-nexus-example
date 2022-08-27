import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

const port = 4000;
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
});
