const {
  displayCommands,
  commandError,
  bandsInTownSearch,
  spotifySearch,
  omdbSearch,
  doWhatItSays,
} = require('./functions');

test('should provide help instruction', () => {
  expect(commandError());
});
