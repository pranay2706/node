const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//handle single input
// rl.question('Please enter something: ', (answer) => {
//     console.log(`You entered: ${answer}`);
//     rl.close();
// });
//handle multiple input
let inputs = [];
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};
(async () => {
    inputs.push(await askQuestion('Enter first input: '));
    inputs.push(await askQuestion('Enter second input: '));
    console.log(`You entered: ${inputs.join(',')}`);
    rl.close();
})();