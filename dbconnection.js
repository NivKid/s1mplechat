const Promise = require('bluebird');
const initOptions = {
    promiseLib: Promise
};
const pgp = require('pg-promise')(initOptions);
const cn = {
    host: 'ec2-54-83-19-82.compute-1.amazonaws.com
',
    port: 5432,
    database: 'd9efj0lcoahrju',
    user: 'iwzqtxfysglrbl',
    password: '97432d26d1dcab1c15ab5f1b45f02abbe9e3fe7e24c97b8b3df261da601ebe3a
'
};

// const localdbConnection = {
//     host: 'localhost',
//     port: 5432,
//     database: 'chatapp',
//     user: 'postgres',
//     password: ''
// };

console.log('Connecting to DB')
const db = pgp(cn);

module.exports = {
    db,
};