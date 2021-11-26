const sql = require('mssql')

const sqlConfig = {
    user: 'sa',
    password: 'zxcv0102034',
    database: 'helple',
    server: 'localhost',
    port: 1433,
    options: {
        encrypt: false
    }
}

// PROMISES: https://www.npmjs.com/package/mssql#promises 


function doQuery(query, callback) {
    sql.on('error', err => {
        // ... error handler
    })

    sql.connect(sqlConfig).then(pool => {
        // Query

        return pool.request()
            .query(query)
    }).then(result => {
        callback(result)
    }).catch(err => {
        console.log(err)
    });

}

module.exports = doQuery
