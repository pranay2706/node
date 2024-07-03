// const fs = require('fs/promises')
const fs = require('fs')

// fs.stat('./text.txt', (err, stats) => {
//     if (err) return console.log(err)
//     console.log(stats.size)
// })


// async function example() {
//     try {
//         const data = await fs.readFile('./text.txt', { encoding: 'utf8' });
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }
// example();

//non blocking way
// console.log(1)
// let data = "hello world 2 "
// fs.writeFile('./new.txt', data, err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('data wriiten successfully')
//     }
// })
// console.log(2)

//blocking way
// console.log(1)
// let data = "hello world 2 "
// fs.writeFileSync('./new.txt', data)
// console.log('data wriiten successfully')
// console.log(2)


// const folderName = 'D:\practice';
// create a folder
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName)
//     }
// } catch (err) {
//     console.error(err)
// }

//read from the folder
// fs.writeFileSync(path.join(path.resolve(folderName), 'new'), 'hello')
// console.log(fs.readdirSync(folderName))
//rename a folder
// fs.rename('D:\practice', 'D:\nice', err => {
//     console.log(err)
// })

//remove a folder
// fs.rmdirSync('D:\practice', { recursive: true, force: true })
// console.log(process.env)









