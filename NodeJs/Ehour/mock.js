var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mysql=require('mysql');

// var path = require('path');



var app = express();

// const route = require('./routes/route')




app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
 app.use(bodyparser.text());
 app.use(bodyparser.json({ type: 'application/json' }));  

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'uploads')));



// app.use('/api', route);

// mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "welcome",
    database : 'nodedb'
  });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO node1 (USERNAME,FIRST_NAME,LAST_NAME) VALUES ?";
//     var values = [
//       ['UJohn','John', 'Highway 71'],
//       ['UPeter','Peter', 'Lowstreet 4'],
//       ['UAmy','Amy', 'Apple st 652'],
//       ['UHannah','Hannah', 'Mountain 21'],
//       ['UMichael','Michael', 'Valley 345'],
//       ['USandy','Sandy', 'Ocean blvd 2'],
//       ['UBetty', 'Betty', 'Green Grass 1'],
//       ['URichard','Richard', 'Sky st 331'],
//       ['USusan','Susan', 'One way 98'],
//       ['UVicky','Vicky', 'Yellow Garden 2'],
//       ['UBen','Ben', 'Park Lane 38'],
//       ['UWilliam','William', 'Central st 954'],
//       ['UChuck','Chuck', 'Main Road 989'],
//       ['UViola', 'Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//     con.query("SELECT * FROM node1", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//       });
      app.get('/users', function (req, res) {
                console.log(req);
                con.query('select * from node1', function (error, results, fields) {
                if (error) throw error;
                res.end(JSON.stringify(results));
              });
             });

             app.post('/users', function (req, res) {
                        var postData  = req.body;
                        con.query('INSERT INTO node1 SET ?', postData, function (error, results, fields) {
                        if (error) throw error;
                        res.end(JSON.stringify(results));
                      });
                     });
                    
                     app.get('/users/:id', function (req, res) {
                                con.query('select * from node1 where  USER_ID=?', [req.params.id], function (error, results, fields) {
                                if (error) throw error;
                                res.end(JSON.stringify(results));
                                console.log(result);
                              });
                             });
                             app.delete('/users', function (req, res) {
                                        console.log(req.body);
                                        con.query('DELETE FROM `node1` WHERE `USER_ID`=?', [req.body.id], function (error, results, fields) {
                                        if (error) throw error;
                                        res.end('Record has been deleted!');
                                      });
                                     });
//   });
 

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE node1 (USER_ID INT AUTO_INCREMENT PRIMARY KEY, USERNAME VARCHAR(50), FIRST_NAME VARCHAR(50), LAST_NAME VARCHAR(50))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//       });
//     });

  

// creating database


//   server post testing 
  app.get('/', (req, res) => {
    res.send('hey');

});
const port = 6300;
app.listen(port, () => {
    console.log('server started running at port' + port);

});