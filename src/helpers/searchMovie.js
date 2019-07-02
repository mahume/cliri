const omdbAPI = require('../api/omdbAPI');
const chalkStyling = require('../utils/chalkStyling');

const { makeBoldBlue, makeBoldUnderline } = chalkStyling;

const searchMovie = async query => {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const searchQuery = makeBoldBlue(query);
  // API
  try {
    const response = await omdbAPI(query);
    const { Title, Year, imdbRating, Actors, Plot } = response.data;
    const { Country, Language } = response.data;
    const { Value } = response.data.Ratings[1];
    // Display
    console.log(`
      ${resultsFor}      ${searchQuery}`);
    console.log(`
      Title:            ${Title}
      Release Year:     ${Year}
      IMDB Rating:      ${imdbRating}
      RT Rating:        ${Value}
      Country:          ${Country}
      Language:         ${Language}
      Actors:           ${Actors}
      Plot:             ${Plot}
    `);
  } catch (error) {
    console.log(`
      Hmm... I'm unable to find the movie ${searchQuery}.
    `);
  }
};

module.exports = searchMovie;
