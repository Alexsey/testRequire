### About

Test to compare time of `require('lodash')` vs `require('lodash/*')` multiple times

### To start

`npm start` to run with 100 lodash/* files

`npm start -- n` to run with `n` lodash/* files where `n` should be from 1 to 331

### Different results

In `index.js` change order of line `6` and `7` - the result may change

Probably because of hard drive cache