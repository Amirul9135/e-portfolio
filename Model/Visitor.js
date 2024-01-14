const db = require("../Controller/Database")
const jwt = require("jsonwebtoken");
const config = require("config")

module.exports = class Visitor {
    id //int
    time //timestamp

    async generateToken() {
        if (!this.id)
            return
        let token = await new Promise((resolve, reject) => {
            jwt.sign({id:this.id}, config.get('JWTSecret'), { algorithm: 'HS384' },(err, signedToken) => {
                if (err) reject(err);
                resolve(signedToken);
            });
        }).catch(err=>{
            console.log('token error',err)
        })
        return token
    }
    async exist(){
        let res = await db.query('SELECT * FROM visitor where id=' + db.escape(this.id)) 
        console.log('exist',res,res.length)
        if(res.length > 0){
            return true
        }
        else{
            return false
        }
    }

    async logActivity(pathname){
        let tmpdate = new Date()
        tmpdate= tmpdate.toLocaleDateString('en-CA', {
            hourCycle: 'h23'
        }).replace(',', '') + " " + tmpdate.toLocaleTimeString('en-CA', {
            hourCycle: 'h23'
        });
        console.log('logging',this) 
        console.log(tmpdate)
        return db.query('INSERT IGNORE INTO activity_log (visitor,pathname,dateTime) VALUES ('+db.escape(this.id)
            +','+ db.escape(pathname) +','+ db.escape(tmpdate) +')')
    }

    static async logNew() {
        let n = new Visitor()
        let result = await db.queryParams('INSERT INTO visitor (id,firstTime) VALUES (NULL,NULL)')
        n.id = result.insertId
        return n
    }
 
}
