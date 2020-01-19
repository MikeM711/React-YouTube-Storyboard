const directory = 'client/src/data';
const fs = require('fs-extra')

async function deleteData() {
  try {

    // make data directory if it doesn't exist
    fs.mkdirs(directory, function(err){
      if (err) return console.error(err);
    });

    // empty data directory
    await fs.emptyDir(directory)
    return
  } catch(err) {
    console.log(err);
  }
}

module.exports = deleteData;