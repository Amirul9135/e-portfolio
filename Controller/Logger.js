const Visitor = require("../Model/Visitor")
const config = require("config")
const jwt = require("jsonwebtoken");
const AccessLog = require('../Model/AccessLog')

class Logger {
    static Resume = 1
    static Potfolio = 2
 
    async record(IP,resType) {
        let log = await AccessLog.newRecord(IP,resType)
        log.save() 
    }
    checkToken(){
        //check token in cookie, if doesn't exist then issue new
        return async function (req, res, next) { 
            try {
                //try parse cookie, if anything wrong issue new
                let token = req.headers.cookie.split('=')[1]   
                let decoded = jwt.verify(config.get('jwtHead') + '.' + token, config.get('JWTSecret'));   
                let tokenIat = new Date(decoded.iat * 1000) 
                let millisecDiff = new Date() - tokenIat
                console.log(tokenIat.toLocaleString(),millisecDiff)
                if(millisecDiff > 1000 * 60 * 60 * 24){
               // if(millisecDiff > 0){
                    //expired
                    let err =  new Error('expired token')
                    err.current_user_id = decoded.id
                    throw(err)
                }
                let visitor = new Visitor()
                visitor.id = decoded.id
                req.visitor = visitor

            } catch (error) {
                console.log('bad token',error) 
                let id = error.current_user_id
                let visitor
                if(id){
                    visitor = new Visitor()
                    visitor.id = id
                    if(!await visitor.exist()){
                        visitor = await Visitor.logNew()
                    }
                }
                else{
                    visitor = await Visitor.logNew()
                }
                let newToken = await visitor.generateToken()
                var fragment = newToken.toString().split('.');
                res.cookie('a_token', fragment[1] + "." + fragment[2], {
                    httpOnly: true,
                    // other options...
                  });
                req.visitor = visitor
            } 
            return next();  
        }


    }
    async test(){ 
        console.log(await AccessLog.newRecord("IPs",1))
    }
}
//let lg = new Logger()
//lg.test()
module.exports = Logger