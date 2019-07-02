const moment = require('moment');
const bandsInTown = require('../api/bandsInTown');
const chalkStyling = require('../utils/chalkStyling');

const { makeBoldBlue, makeBoldUnderline } = chalkStyling;

const searchConcert = async query => {
  // Styling
  const resultsFor = makeBoldUnderline('Results For:');
  const searchQuery = makeBoldBlue(query);
  // API
  const response = await bandsInTown(query);
  const { venue, datetime } = response.data[0];
  const dateFormatted = moment(datetime).format('MM/DD/YYYY');
  // Display
  console.log(`
    ${resultsFor}      ${searchQuery}`);
  console.log(`
    Venue:            ${venue.name}
    Location:         ${venue.city}
    Date:             ${dateFormatted}
    `);
};

module.exports = searchConcert;
