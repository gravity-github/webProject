var mysql = require('mysql')
var con = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'12345678'
});

con.connect(function(err){
    if (err) throw err ;
    console.log('connected');
    con.query('select * from mydb.logs',function(err,result,fields){
        if (err) throw err;
        result.forEach(e=> {
            console.log(e);
        });
    });
});