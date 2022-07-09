function httpLogger(req, res, next){
    if(req.method == "GET"){
        console.info(`[${req.protocol.toUpperCase()}] ${req.method} '${req.originalUrl}' \x1b[32m${req.ip}\x1b[0m ${new Date().toUTCString()}`)
    }else if(req.method == "POST"){
        console.info(`[${req.protocol.toUpperCase()}] ${req.method} '${req.originalUrl}' \x1b[32m${req.ip}\x1b[0m ${new Date().toDateString()}`)
        if(process.env.LOG_BODY == 'true') console.info(`[BODY] ${JSON.stringify(req.body)}`)
    }
}

module.exports = httpLogger;