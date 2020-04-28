var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql/msnodesqlv8'); // MS Sql Server client

// Connection string parameters.
var sqlConfig = {
    driver: 'msnodesqlv8',
    connectionString:'Driver={SQL Server Native Client 11.0};Server={localhost\\MSSQLSERVER02};Database={master};Trusted_Connection={yes};'
}
// Start server and listen on http://localhost:8090/
var http= require('http');
var url = require('url');
var fs=require('fs');
var server = http.createServer(app,function (req,res) {

    console.log('request was made:'+req.url);
  
    
    
    }).listen(8090,'localhost', function() {
        console.log('Listening to port:' + 8090);
    });
    
    

/////////////////////////////////////

app.get('/gamesearchcatt/:Name', function (req, res) {
    var filename = "."+'/newone.html';
    fs.readFile(filename,function(err,data){
    if (err){res.writeHead(404,{'Content-Type':'text/html'});
    return res.end ("404 Not Found");
    
    
    
    
    }res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
    
    
    
    });
    
       
    })
 


app.get('/', function (req, res) {
var filename = "."+'/Home.html';
fs.readFile(filename,function(err,data){
if (err){res.writeHead(404,{'Content-Type':'text/html'});
return res.end ("404 Not Found");




}res.writeHead(200,{'Content-Type':'text/html'});
res.write(data);
return res.end();



});

   
})
app.get('/Home', function (req, res) {
    var filename = "."+'/Home.html';
    fs.readFile(filename,function(err,data){
    if (err){res.writeHead(404,{'Content-Type':'text/html'});
    return res.end ("404 Not Found");
    
    }res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
    });
    
    })
    app.get('/Search/:Name', function (req, res) {
        var filename = "."+'/Search.html';
        fs.readFile(filename,function(err,data){
        if (err){res.writeHead(404,{'Content-Type':'text/html'});
        return res.end ("404 Not Found");
        }res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        });
        })
        app.get('/GamePage/:barcode', function (req, res) {
            var filename = "."+'/GamePage.html';
            fs.readFile(filename,function(err,data){
            if (err){res.writeHead(404,{'Content-Type':'text/html'});
            return res.end ("404 Not Found");
            }res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
            });
            })
    app.get('/Login', function (req, res) {
        var filename = "."+'/Login.html';
        fs.readFile(filename,function(err,data){
        if (err){
        res.writeHead(404,{'Content-Type':'text/html'});
        return res.end ("404 Not Found");
    }res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        });
        })
        app.get('/Services', function (req, res) {
            var filename = "."+'/Services.html';
            fs.readFile(filename,function(err,data){
            if (err){res.writeHead(404,{'Content-Type':'text/html'});
            return res.end ("404 Not Found");
            
            
            
            
            }res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
            
            
            
            });
            
               
            })
            

app.get('/Games', function (req, res) {
    var filename = "."+'/Games.html';
    fs.readFile(filename,function(err,data){
    if (err){res.writeHead(404,{'Content-Type':'text/html'});
    return res.end ("404 Not Found");
    
    
    
    
    }res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
    
    
    
    });
    
       
    })
    app.get('/Register', function (req, res) {
        var filename = "."+'/Register.html';
        fs.readFile(filename,function(err,data){
        if (err){res.writeHead(404,{'Content-Type':'text/html'});
        return res.end ("404 Not Found");
        
        
        
        
        }res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        
        
        
        });
        
           
        })
app.get('/getBestSelling', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query('EXEC BestsellinGamess', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})
app.get('/gamesearch/:GameName', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC GameSearchingName10 ${req.params.GameName}` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordset)); // Result in JSON format
        });
    });
})   
app.get('/ServicesAdmin', function (req, res) {
    var filename = "."+'/ServiceAdmin.html';
    fs.readFile(filename,function(err,data){
    if (err){res.writeHead(404,{'Content-Type':'text/html'});
    return res.end ("404 Not Found");
    }res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
    });
    })

    app.get('/LP/:id',function (req, res) {
        var filename = "."+'/LP.html';
        fs.readFile(filename,function(err,data){
        if (err){res.writeHead(404,{'Content-Type':'text/html'});
        return res.end ("404 Not Found");
        }res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
        });
        })
        app.get('/releasedgame',function (req, res) {
            var filename = "."+'/RealesedGame.html';
            fs.readFile(filename,function(err,data){
            if (err){res.writeHead(404,{'Content-Type':'text/html'});
            return res.end ("404 Not Found");
            }res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
            });
            })
            app.get('/unreleasedgame1',function (req, res) {
                var filename = "."+'/UnreleasedGame.html';
                fs.readFile(filename,function(err,data){
                if (err){res.writeHead(404,{'Content-Type':'text/html'});
                return res.end ("404 Not Found");
                }res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end();
                });
                })
            
                
                app.get('/Catsearch/:Cat',function (req, res) {
                    var filename = "."+'/CategoryGame.html';
                    fs.readFile(filename,function(err,data){
                    if (err){res.writeHead(404,{'Content-Type':'text/html'});
                    return res.end ("404 Not Found");
                    }res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    return res.end();
                    });
                    })
    
app.get('/gamesearchplat/:gameplat', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC GameSearchingWPlatform4 ${req.params.gameplat}` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/gamesearchcat/:gamecat', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC GameSearchingWCategory5 ${req.params.gamecat}` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

app.get('/returnRentedCopy/:barcode/:damage', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var x =formatDate(new Date());

        request.query(`EXEC returnRentedCopy2 ${req.params.barcode}, ${req.params.damage},'${x}' `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/acceptingorders/:log_partener_id/:order_id/:floos', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC acceptingOrder5 ${req.params.log_partener_id},${req.params.order_id},${req.params.floos} `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/cancelOrder/:orderid', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC cancelOrder1 ${req.params.orderid}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/reviewOrder/:comment/:star/:cusid/:gameid', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC reviewOrder ${req.params.comment}, ${req.params.star}, ${req.params.cusid}, ${req.params.gameid} `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/ShowproductsIbought/:cusid', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC ShowproductsIbought ${req.params.cusid} `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/showallorders/:cusid', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC viewMyOrder ${req.params.cusid} `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/CustBlocking/:customerid', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC CustBlocking ${req.params.customerid} `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/AddLogPartner/:address', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC AddLogPartner ${req.params.address} `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/admingames/:gamename/:rate/:date', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        var ahmed= Number(req.params.rate);
        
        request.query(`
        declare @var int;
        
        EXEC admingames5 ${req.params.gamename},${ahmed},@var output,'${req.params.date}'`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/admingamecat/:gameid/:cat', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC admingamecat ${req.params.gameid},${req.params.cat}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/admingamedev/:gameid/:dev', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC admingamedev ${req.params.gameid}, ${req.params.dev}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/register/:username/:name/:age/:address/:password/:email', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC CustomerRegisteration ${req.params.username},${req.params.name},${req.params.age},${req.params.address},${req.params.password},${req.params.email}` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/admmincopyinsertionss/:is_rental/:price/:platform_copy/:gameid/:DailyRentalRate/:cond', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC admmincopyinsertionss6 ${req.params.is_rental},${req.params.price},${req.params.platform_copy},${req.params.gameid},${req.params.DailyRentalRate},${req.params.cond}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})

app.get('/CusLog/:UserNamex/:passwordx', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC CusLog4 ${req.params.UserNamex},${req.params.passwordx}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})
app.get('/Customer_Add_Address/:customer_id/:address', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC Customer_Add_Address ${req.params.customer_id},${req.params.address}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/Add_Payment_Method/:customer_id/:method/:accountnum', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC Add_Payment_Method ${req.params.customer_id},${req.params.method},${req.params.accountnum}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})
app.get('/preorder/:customer_id/:barcode/:quantity', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(` declare @var int;
         EXEC preorder3 ${req.params.customer_id} ,${req.params.barcode},${req.params.quantity}, @var output `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})
app.get('/BUY/:customer_id/:barcode/:quantity', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(` declare @var int;
         EXEC Buy12 ${req.params.customer_id} ,${req.params.barcode},${req.params.quantity}, @var output `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})
app.get('/RENT/:customer_id/:barcode/:quantity/:rentdur/:deliverty', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(` declare @var int;
         EXEC rent16 ${req.params.customer_id} ,${req.params.barcode},${req.params.quantity},${req.params.rentdur},${req.params.deliverty},@var output `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})

app.get('/unreleasedGames', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC Unreleasedseacrch1`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        });
    });
})

app.get('/gamesearchbarcode/:bar_code', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC GameSearchingbarcode ${req.params.bar_code}` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordset)); // Result in JSON format
        });
    });
})
app.get('/getcomment/:bar_code', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`EXEC getallcustomersreview ${req.params.bar_code}` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordset)); // Result in JSON format
        });
    });
})
app.get('/viewOrder', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
            request.query(`EXEC viewOrders` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordset)); // Result in JSON format
        });
    });
})
app.get('/viewRetOrder', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
            request.query(`EXEC showreturnorder` , function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})
app.get('/customerreturn/:customerid/:orderid', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(` declare @var int;
         EXEC customerreturn ${req.params.customerid} ,${req.params.orderid}`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets[0])); // Result in JSON format
        });
    });
})
app.get('/release', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`
         EXEC releasedseacrch `, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets)); // Result in JSON format
        });
    });
})
app.get('/unrelease', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.query(`
         EXEC Unreleasedseacrch1`, function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset.recordsets)); // Result in JSON format
        });
    });
})