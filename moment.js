var moment = require('moment');
const momentTimezone = require('moment-timezone');
var date = moment("2024-07-03");
//date formating
console.log(date.format());
console.log(date.format('MMMM Do YYYY'));
console.log(date.format('YYYY/MM/DD'));
console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
//date manipilation
date.add(7, 'days');
console.log(date.format('YYYY-MM-DD'));
date.subtract(1, 'month');
console.log(date.format('YYYY-MM-DD'));
// validate dates
var validDate = moment("2024-07-03", "YYYY-MM-DD", true).isValid();
console.log(validDate);
var invalidDate = moment("2024-13-03", "YYYY-MM-DD", true).isValid();
console.log(invalidDate);
//realtive time
var date = moment().subtract(3, 'days');
console.log(date.fromNow());
var futureDate = moment().add(5, 'hours');
console.log(futureDate.fromNow());
const d = momentTimezone.tz("2024-07-03 12:00", "America/New_York");
console.log(d.format());
const localDate = d.clone().tz(momentTimezone.tz.guess());
console.log(localDate.format())