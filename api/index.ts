import { app } from './server';
const port = 4000;

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
});
