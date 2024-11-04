const express = require('express')
const config = require("config")
const app = express()
const path = require('path'); 
const db =  require('./Controller/Database')
const Logger = require("./Controller/Logger");
const AccessLog = require('./Model/AccessLog');
const log = new Logger()
 
 
app.use(express.json({ extended: false }));
app.set('trust proxy',true); 


app.get('/api/stats',async (req,res)=>{
    return res.json(await AccessLog.accesRecords())
})


app.get('/api/activity',async (req,res)=>{
    try{
        return res.json(await AccessLog.activityLogList(req.query.v,req.query.ts))

    }catch(e){
        return res.status(500).json(e)
    }
})

app.post('/api/log/path',log.checkToken(),  async(req,res)=>{
    console.log(req.body)
    if(req.visitor){
        req.visitor.logActivity(req.body.path)
    }
    return res.json()
})
app.get('/stats', (req,res)=>{
    return res.sendFile(path.join(__dirname , 'statistics.html'));
} )
app.get('/echarts', (req,res) =>{
    return res.sendFile(path.join(__dirname ,'Plugin',  'echarts.min.js'));
}) 
app.get('/bsjs', (req,res) =>{
    return res.sendFile(path.join(__dirname ,'client', 'node_modules', 'bootstrap','dist','js', 'bootstrap.js'));
})
app.get('/bscss', (req,res) =>{
    return res.sendFile(path.join(__dirname ,'client', 'node_modules', 'bootstrap','dist','css', 'bootstrap.css'));
})
app.get('/dtjs', (req,res) =>{
    return res.sendFile(path.join(__dirname ,'Plugin','datatable',  'datatable.min.js'));
})
app.get('/dtcss', (req,res) =>{
    return res.sendFile(path.join(__dirname ,'Plugin','datatable',  'datatable.min.css'));
})
app.get('/jquery', (req,res) =>{
    return res.sendFile(path.join(__dirname ,'Plugin',   'jquery-3.4.1.min.js'));
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