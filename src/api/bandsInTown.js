const axios = require('axios');
const ora = require('ora');

const bandsInTown = async query => {
  const spinner = ora().start();
  try {
    const queryURL = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
    const response = await axios.get(queryURL);
    spinner.stop();
    return response;
  } catch (error) {
    spinner.stop();
  }
};

module.exports = bandsInTown;
