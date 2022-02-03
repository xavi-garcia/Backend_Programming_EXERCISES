const moment = require('moment')

let today = moment();
let birthday = moment('1990-12-14');


console.log(`Hoy es ${today.format('DD/MM/YYYY')}`)
console.log(`Mi cumple es ${birthday.format('DD/MM/YYYY')}`)
console.log(`Desde que nací han pasado ${today.diff(birthday, 'days')} días`)