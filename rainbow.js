/*
author: tinsae
*/

var md5 = require("md5");
const fs = require("fs");

async function readArguments() {
  try {
    if (process.argv.length < 6) {
      throw new Error(
        `Not enough arguments passed in (need a -p(newline delimited file containing passwords) and -h(newline delimited file containing hashes))`
      );
    } else if (process.argv[2] === "-p") {
      if (process.argv[4] === "-p") {
        throw new Error(
          "The -p flag has already been specified, did you mean -h?"
        );
      } else if (process.argv[4] !== "-h") {
        throw new Error(
          `[-] Argument Error. '${process.argv[4]}' Is not a valid option`
        );
      }
      return [process.argv[3], process.argv[5]];
    } else if (process.argv[2] === "-h") {
      if (process.argv[4] === "-h") {
        throw new Error(
          "The -h flag has already been specified, did you mean -p?"
        );
      } else if (process.argv[4] != "-p") {
        throw new Error(
          `[-] Argument Error. '${process.argv[4]}' Is not a valid option`
        );
      }
      return [process.argv[5], process.argv[3]];
    } else {
      throw new Error(
        "[-] Argument error. Should follow this format -> node rainbow.js -p file.txt(newline delimited file containing passwords) -h file.txt(newline delimited file containing hashes)"
      );
    }
  } catch (err) {
    console.log(`[-] An error occured while parsing the arguments ${err}`);
    process.exit();
  }
}

const findHash = (passwordFile, hashFile) => {
  
  try {
    //read contents of the file containing the password hashes
    const passwordHashes = fs.readFileSync(hashFile, 'UTF-8');
    // split the contents by new line 
    const hashes = passwordHashes.split(/\r?\n/);
    // read the file containing the list of passwords passed in by user
    const passwordsFile = fs.readFileSync(passwordFile, 'UTF-8')
    const passwords = passwordsFile.split(/\r?\n/);
    console.log('****Matches****')
    hashes.forEach((hash) => {
        passwords.forEach(password => {
          if(md5(password) === hash){
            console.log(`Password: ${password} | Hash: ${hash}`)
          }
        })
    });
    console.log('Done')
  } catch (err) {
    console.log(`[-] Something went wrong ${err.message}`);
  }
};

readArguments().then((res) => {
  let [passwordFile, hashFile] = res;
  findHash(passwordFile, hashFile)
});