import mysql from 'mysql';
import keys from './keys';

const pool= mysql.createPool(keys.database);
pool.getConnection((err,connection)=>{
    if(err) throw err;
    connection.release();
    console.log('db connected');
});

export default pool;