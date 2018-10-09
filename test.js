const join = require('./index.js');

let goal = 'This is the most efficient solution.';

let result = join`This` `is` `the` `most` `efficient` `solution.${' '}`;

if (goal === result) {
    console.log('WE DID IT!!!!!');
} else {
    console.log(`Expected '${goal}' but received '${result}'`);
}