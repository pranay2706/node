const buf1 = Buffer.from('Hello, world!');

console.log(buf1.toString());
buf1[0] = 72;
console.log(buf1.toString());

const buf2 = Buffer.alloc(10);
buf2[0] = 65;
console.log(buf2.toString()); 