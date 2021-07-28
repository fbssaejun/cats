const fs = require('fs');

const breedDetailsFromFile = function(breed, callBackWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) callBackWhenDone(data);
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  if(breed === undefined) {
    return 'no breeds matching'
  }
  return 'Return Value: ', breed // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports =  breedDetailsFromFile
