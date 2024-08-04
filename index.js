require('dotenv').config();
const express = require('express');
const summarizeText = require('./summarize.js');
const app = express();
// const port = 3000;

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint
app.post('/summarize', (req, res) => {

   // TODO: handle POST /summarize request
   const text_to_summarize = req.body.text_to_summarize;

   summarizeText(text_to_summarize)
      .then(summary => {
         res.send(summary);
      })
      .catch(error => console.log(error.message))
});

// Start the server
// app.listen(port,() => {
//    console.log(`Server running at http://localhost:${port}/`);
// });

app.listen(process.env.PORT, () => {
   console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
