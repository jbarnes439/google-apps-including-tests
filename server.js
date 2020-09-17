const express = require('express');
// const morgan = require('morgan');
// const googleApps = require('./google-apps');

const app = express();

// app.use(morgan('dev'));

// const validGenres = ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'];

// function handleGetTypes(req, res) {
//   res.json(validGenres);
// }

// app.get('/app', function handleGetTypes(req, res) {
//   const { genre = " ", sort } = req.query;

//   if (sort) {    
//     // need to make case insensitive at some point.
//     if (!['App', 'Rating'].includes(sort)) {
//       return res.status(400).send('Sort must be by app or rating');
//     }
//   }

//   let results = googleApps.filter(app =>
//     app
//       .Genres
//       .toLowerCase()
//       .includes(genre.toLowerCase()));
      
//   if (sort) {    
//     results
//       .sort((a, b) => {
//         return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
//       });
//   }

//   res.json(results);
// });

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
