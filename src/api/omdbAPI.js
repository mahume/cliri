const axios = require('axios');
const ora = require('ora');

const omdbAPI = async query => {
  const spinner = ora().start();
  try {
    const queryURL = `http://www.omdbapi.com/?t=${query}&y=&plot=short&apikey=trilogy`;
    const response = await axios.get(queryURL);
    spinner.stop();
    return response;
  } catch (error) {
    spinner.stop();
    console.log(error);
  }
};

module.exports = omdbAPI;
