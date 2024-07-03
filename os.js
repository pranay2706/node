const os = require('os');

// Platform
console.log('Platform:', os.platform());

// Architecture
console.log('Architecture:', os.arch());

// Total memory
console.log('Total memory:', os.totalmem() / (1024 * 1024 * 1024), 'GB');

// Free memory
console.log('Free memory:', os.freemem() / (1024 * 1024 * 1024), 'GB');

// CPU cores
console.log('CPU cores:', os.cpus().length);

// Hostname
console.log('Hostname:', os.hostname());

// User info
console.log('User info:', os.userInfo());

// Network interfaces
console.log('Network interfaces:', os.networkInterfaces());
