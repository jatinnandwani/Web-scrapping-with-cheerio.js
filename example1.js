var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 7811;


url = 'PUT YOUR OWN URL'
request(url,(error, response, html) => {
    if(!error && response.statusCode == 200){
        //console.log(html);
        const $ =cheerio.load(html);
        const loginTest = $('.main-content');
        console.log(loginTest.html());
        // console.log('finsh');

        // $('.account-wall-login').each(function(i, element){
        //     const $element = $(element);
        //     console.log($element);
        //     console.log('===========');
        //     console.log($element.text());
        //     console.log('===========');
        // })
    }else{
        console.log('an error occured');
    }
})

app.listen(port)