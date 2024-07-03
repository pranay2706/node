const fs = require('fs')

const AppError = require('./AppError')

const handleFileOperations = () => {
    fs.readFile('./source.tx', 'utf8', (err, data) => {
        if (err) {
            const error = new AppError(err.message, 404);
            writeToErrorFile(error);
        } else {
            fs.writeFile('./destination.txt', data, (err) => {
                if (err) {
                    const error = new AppError(err.message);
                    writeToErrorFile(error);
                } else {
                    console.log('Data saved successfully to destination.txt');
                }
            });
        }
    });
};

const writeToErrorFile = (error) => {
    fs.readFile('error.txt', 'utf-8', (err, data) => {
        if (err) return console.log('error in finding previous error', err)

        fs.writeFile('error.txt', `${data}\n ${JSON.stringify(error)}`, (err) => {
            if (err) {
                console.error('Error writing to error.txt:', err);
            } else {
                console.log('Error message saved to error.txt');
            }
        });

    })
};

handleFileOperations();
