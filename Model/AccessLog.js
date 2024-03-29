const db = require("../Controller/Database")

module.exports = class AccessLog {
    //table accessible_resource
    id
    IP
    date
    resource
    save() {
        return db.queryParams('INSERT IGNORE INTO access_log (visitor,IP,date,resource) VALUES ('
            + db.escape(this.id) + ',' + db.escape(this.IP) + ',' + db.escape(this.date) + ',' + db.escape(this.resource) + ')')
    }
    static async newRecord(req, res) {
        let newAccess = new AccessLog()
        let tmpdate = new Date()
        newAccess.date = tmpdate.toLocaleDateString('en-CA', {
            hourCycle: 'h23'
        }).replace(',', '') + " " + tmpdate.toLocaleTimeString('en-CA', {
            hourCycle: 'h23'
        });
        //newAccess.date = newAccess.date.slice(0, -5) + '00:00'; // hourly diff only
        newAccess.date = newAccess.date.slice(0, -4) + '0:00'; // tens of min diff only
        // newAccess.date = newAccess.date.slice(0, -2) + '00'; // min diff only

        try {
            newAccess.IP = req.headers['x-real-ip']
            if (!newAccess.IP)
                throw new Error('not forwared by nginx')

            console.log("IP real", newAccess.IP)
        } catch (e) {
            newAccess.IP = req.ip
            console.log("IP", newAccess.IP)
        }

        newAccess.resource = res
        newAccess.id = req.visitor.id
        return newAccess


    }

    static async accesRecords() {
        return db.queryParams('SELECT * FROM access_log ORDER BY date DESC')
    }

    static async activityLogList(visitor, tstart) {
        console.log('st',visitor,tstart)
        let res1 = await db.query(' SELECT MIN(date) AS lowest_date '
            + ' FROM access_log '
            + ' WHERE visitor = ' + db.escape(visitor) + ' AND date > ' + db.escape(db.toLocalSQLDateTime(tstart))) 
        let lowestnext = res1[0].lowest_date
        console.log(lowestnext)
        let actSql = "SELECT * FROM activity_log WHERE visitor = " + db.escape(visitor)
            + " AND dateTime >= " + db.escape(db.toLocalSQLDateTime(tstart))
        
        if(lowestnext  ){ 
            actSql += " AND dateTime <= " + db.escape(db.toLocalSQLDateTime(lowestnext)) 
        } 
        return db.query(actSql + ' ORDER BY dateTime ASC')
    }
}