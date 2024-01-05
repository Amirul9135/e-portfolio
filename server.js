const express = require('express')
const config = require("config")
const app = express()
const path = require('path');
const cache = require('node-persist')

var visitCount = 0
var downloadResumeCount = 0

function incrementCount(req, res) {
    if (!req.headers.cookie){
        res.cookie('visited', 'true', { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });
        visitCount++; 
        cache.setItem('visit', visitCount)
    }  
    console.log('cur count', visitCount)
}

app.listen(config.get("PORT"), async function () {

    await cache.init({
        dir: 'data/stat',
        stringify: JSON.stringify,
        parse: JSON.parse, 
    });;
    await cache.forEach(data => {
        console.log(data)
        if (data.key == 'visit') {
            visitCount = data.value
        }
        if (data.key == 'dresume') {
            downloadResumeCount = data.value
        }
    });
    console.log("Server started on port " + config.get("PORT"))
})

app.get('/stat', function(req,res){
    return res.json({"visited":visitCount})
}) 

app.get('/download/resume', function (req, res) { 
    //later count here how many download
    return res.download(path.join(__dirname, 'downloads', 'Resume Active (Dec 2023).pdf'), 'Resume Active (Dec 2023).pdf', (err) => {
        if (err) {
          // Handle errors
          console.error(`Error downloading file: ${err.message}`);
        } else { 
            //this might also logs multiple download if downloader is used
          downloadResumeCount++;
          cache.setItem('dresume', downloadResumeCount)
        }
      }); 
})

app.get('/About', (req, res) => {
    // Redirect to /
    res.redirect('/');
});
 
app.get('/', (req, res, next) => {
    console.log('root')
    incrementCount(req, res)
    next()
});


app.use(express.static("client/build"));

app.get('*', (req, res) => {
    console.log('else')
    incrementCount(req, res)
    return res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});