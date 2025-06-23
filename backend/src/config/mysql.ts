import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'aiot',
    port: 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export async function connectMysql() {
    db.getConnection()
        .then((connection) => {
            console.log("Connect to mysql successfully!")
            connection.release()
        })
        .catch((err) => {
            console.log("Connect to mysql failure! err: ", err)
        })
}