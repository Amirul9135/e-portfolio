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


    static async logNew() {
        let n = new Visitor()
        let result = await db.queryParams('INSERT INTO visitor (id,firstTime) VALUES (NULL,NULL)')
        n.id = result.insertId
        return n
    }
}
