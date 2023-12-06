const express = require('express')
const config = require("config")
const app = express()
const path = require('path'); 

app.listen(config.get("PORT"), function () {
    console.log("Server started on port " + config.get("PORT"))
})

app.get('/download/resume/AmirulAsraf', function (req, res) {
    console.log('download resume')
    //later count here how many download
    return res.sendFile(path.join(__dirname, 'Resume', 'AmirulAsraf.pdf'))
})


app.use(express.static("client/build")); 
