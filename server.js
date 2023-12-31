const express = require('express')
const config = require("config")
const app = express()
const path = require('path'); 
const db =  require('./Controller/Database')
const Logger = require("./Controller/Logger");
const AccessLog = require('./Model/AccessLog');
const log = new Logger()
 
 

app.get('/api/stats',async (req,res)=>{
    return res.json(await AccessLog.accesRecords())
})
app.get('/stats', (req,res)=>{
    return res.sendFile(path.join(__dirname , 'statistics.html'));
} )
app.get('/echarts', (req,res) =>{
    return res.sendFile(path.join(__dirname , 'echarts.min.js'));
})

app.listen(config.get("PORT"), async function () {
    await db.init() 
    console.log("Server started on port " + config.get("PORT"))
})
  

app.get('/download/resume',log.checkToken(), function (req, res) {  
    //later count here how many download
    console.log('donload')
    return res.download(path.join(__dirname, 'downloads', 'Resume Active (Dec 2023).pdf'), 'Resume Active (Dec 2023).pdf', (err) => {
        if (err) {
          // Handle errors
          console.error(`Error downloading file: ${err.message}`);
        } else { 
            log.record(req,Logger.Resume)
            //this might also logs multiple download if downloader is used 
        }
      }); 
})

app.get('/About', (req, res) => {
    // Redirect to /
    res.redirect('/');
});
 
app.get('/',log.checkToken(), (req,res,next)=>{
    log.record(req,Logger.Potfolio)
    next()
});


app.use(express.static("client/build"));

app.get('*',log.checkToken(), (req, res) => {  
    log.record(req,Logger.Potfolio)
    return res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});