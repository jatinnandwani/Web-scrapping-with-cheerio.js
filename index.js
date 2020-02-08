var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 7000;
app.listen(port)

// var url = "PUT YOUR OWN URL";
// request(url,function(err, resp, body){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(body);   
//     }
// })

 
//  var fileDestination = fs.createWriteStream('./downloads/greythrLanding.html');
//  var url = "PUT YOUR OWN URL";
//  request(url).pipe(fileDestination);

var fileDestination = fs.createWriteStream('./downloads/greythrLanding.html');
var url = "PUT YOUR OWN URL";
request(url)  
.pipe(fileDestination);
// .on('finish',function(){
//     console.log('Downloading is complete');
// })
// .on('error',function(err){
//     console.log(err);
// });

fileDestination.on('finish',function(){
    console.log('it is done');
})


console.log('I am listening you at' + port);
