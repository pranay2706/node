const x = 1;
const y = 2;
const z = 3;
console.count(
    'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
    'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
    'The value of y is ' + y + ' and has been checked .. how many times?'
);
const oranges = ['orange', 'orange'];
const apples = ['just one apple'];
oranges.forEach(fruit => {
    console.count(fruit);
});
apples.forEach(fruit => {
    console.count(fruit);
});
const function2 = () => console.trace();
const function1 = () => function2();
function1();
const doSomething = () => console.log('test');
const measureDoingSomething = () => {
    console.time('doSomething()');
    doSomething();
    console.timeEnd('doSomething()');
};
measureDoingSomething();
const ProgressBar = require('progress');
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 1000);