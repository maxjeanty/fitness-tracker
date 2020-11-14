const express = require('express');
require('./db/mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

// const collections = ["workoutSeeds"];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//ROUTES;

require('./routes/html_routes.js')(app);
require('./routes/api_routes.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
