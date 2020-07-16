const express = require('express'),
      { graphqlHTTP } = require('express-graphql'),
      schema = require('./schema'),
      cors = require('cors');

const app = express();

// Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));