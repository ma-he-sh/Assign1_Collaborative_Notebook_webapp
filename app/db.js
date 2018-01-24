/**
 * Contain the connection to the mongo database
 */

 const {
     Client
 } = require('pg')

 const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'webapp',
    password: 'a2fb22ce710899f6e455b3984ee16930',
    post: 5432,
});

client.connect();

client.on('error', (err, client)=>{
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const createTB = 
    'CREATE TABLE IF NOT EXISTS users('+
    'email VARCHAR(100) PRIMARY KEY,'+
    'fname VARCHAR(100) NOT NULL,'+
    'lname VARCHAR(100) NOT NULL,'+
    'passw VARCHAR(100) NOT NULL);'+
    'CREATE TABLE IF NOT EXISTS notes('+
    'id SERIAL PRIMARY KEY,'+
    'email VARCHAR(100) NOT NULL,'+
    'mime_type VARCHAR(255) NOT NULL,'+
    'file_name VARCHAR(255) NOT NULL,'+
    'file_data BYTEA NOT NULL);';

client.query(createTB, (err, res) => {
    if(err){
        console.log(err.stack);
    }else{
        console.log(res)
    }
});