var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mysql=require('mysql');



var app = express();






app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: 'application/json' }));  




// app.use('/api', route);
var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "welcome",
        database : 'ehour'
      });
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM USERS", function (err, result, fields) {
          if (err) throw err;
          // console.log(result);
        });
      });
//hsfdjxhjfshdhjjs


      
// var dbConfig = {
//         host: "localhost",
//         user: "root",
//         password: "welcome",
//         database : 'ehour'
//       };
      
//       function getEmp() {
//           var conn = new sql.Connection(dbConfig);
          
//           conn.connect().then(function () {
//               var req = new sql.Request(conn);
//               req.query("SELECT * FROM USERS").then(function (recordset) {
//                   console.log(recordset);
//                   conn.close();
//               })
//               .catch(function (err) {
//                   console.log(err);
//                   conn.close();
//               });        
//           })
//           .catch(function (err) {
//               console.log(err);
//           });
//         }
      
    ///fsjbahjhkjhjkvskjds
    // getting all users
      app.get('/users', function (req, res) {
        console.log(req);
        con.query('select * from USERS', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
         
        });
     });
    //  get individual user
     app.get('/users/:id', function (req, res) {
        con.query('select * from USERS where USER_ID=?', [req.params.id], function (error, result, fields) {
        if (error) throw error;
        res.send(JSON.stringify(result));
      });
     });
    //  update users
     app.put('/users', function (req, res) {
        con.query('UPDATE `USERS` SET `USERNAME`=?,`FIRST_NAME`=?,`LAST_NAME`=? where `USER_ID`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
        console.log(results);
      });
     });
    //  post new user/create
     app.post('/users', function (req, res) {
        var postData  = req.body;
        console.log(postData);   
        con.query('INSERT INTO USERS SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
     });
  // delete users
     app.delete('/user', function (req, res) {
        console.log(req.body);
        con.query('DELETE FROM `USERS` WHERE `USER_ID`=?', [req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end('Record has been deleted!');
      });
     });






  app.get('/', (req, res) => {
    res.send('hey');

});
const port = 6200;
app.listen(port, () => {
    console.log('server started running at port' + port);

});