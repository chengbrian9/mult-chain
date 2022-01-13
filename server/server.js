const path = require('path');
const express = require('express');
const favicon = require('express-favicon')
const app = express();
const PORT = process.env.PORT || 8080;

//routers
app.use(favicon(__dirname + '/public/favicon.png'));

//handle static files
app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

//route handlers

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'))
})


// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  return res.status(404).send('404 Error');
});

//default err handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `${err}`,
    status: 400,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.log);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
  