# Rainbow table 

A rainbow table is a precomputed lookup table used in cryptography for storing password hashes. It is used for recovering a password-based on its hash value.

A rainbow table attack is a technique wherein a rainbow hash table is used to crack the passwords stored in a database or some other system. 

### Script Usage

Download the files needed (and some sample hashes and passwords) with the following command:
`git clone link`

You'll need `Node.js` to run the script; you can download [`Node.js` here](https://nodejs.org/en/). 

To run the script you will need to install it's dependencies, execute the following command to do so: 

`npm install`

You can now run the script 🎉 

You will need to specify two parameters for it to work:

- `-p` - file containing newline delimited passwords 
- `-h` - file containing newline delimited hashes 

To run the script with the sample provided, execute the following command:

`node rainbow.js -p sample/passwordHashes.txt  -h sample/10-million-password-list-top-1000000.txt`

enjoy :) 