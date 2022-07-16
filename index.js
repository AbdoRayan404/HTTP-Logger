function httpLogger(req, res, next){
    let ip = "";

    if(process.env.HOST_NAME === 'heroku') ip = req.headers['x-forwarded-for'].split(',')[0];
    else ip = req.ip;

    if(req.method == "GET"){
        process.stdout.write(`[${req.protocol.toUpperCase()}/${req.httpVersion}] ${req.method} '${req.originalUrl}' \x1b[32m${ip}\x1b[0m ${new Date().toDateString()} [REQUEST] '${req.headers['user-agent']}' encoding:'${req.headers['accept-encoding']}'`)
        if(process.env.LOG_AUTHORIZATION == 'true') process.stdout.write(`[AUTH] ${req.headers['authorization'] ? req.headers['authorization'] : "No Auth token were sent"}`)
        console.log('')
    }
    else if(req.method == "POST"){
        process.stdout.write(`[${req.protocol.toUpperCase()}/${req.httpVersion}] ${req.method} '${req.originalUrl}' \x1b[32m${ip}\x1b[0m ${new Date().toDateString()} [REQUEST] '${req.headers['user-agent']}' content:'${req.headers['content-type']}' encoding:'${req.headers['accept-encoding']}'`)
        if(process.env.LOG_BODY == 'true') process.stdout.write(`[BODY] ${JSON.stringify(req.body)} `)
        if(process.env.LOG_AUTHORIZATION == 'true') process.stdout.write(`[AUTH] ${req.headers['authorization'] ? req.headers['authorization'] : "No Auth token were sent"}`)
        console.log('')
    }
    else if(req.method == "DELETE"){
        process.stdout.write(`[${req.protocol.toUpperCase()}/${req.httpVersion}] ${req.method} '${req.originalUrl}' \x1b[32m${ip}\x1b[0m ${new Date().toDateString()} [REQUEST] '${req.headers['user-agent']}' encoding:'${req.headers['accept-encoding']}'`)
        if(process.env.LOG_AUTHORIZATION == 'true') process.stdout.write(`[AUTH] ${req.headers['authorization'] ? req.headers['authorization'] : "No Auth token were sent"}`)
        console.log('')
    }
    else if(req.method == "PUT"){
        console.log(req)
        process.stdout.write(`[${req.protocol.toUpperCase()}/${req.httpVersion}] ${req.method} '${req.originalUrl}' \x1b[32m${ip}\x1b[0m ${new Date().toDateString()} [REQUEST] '${req.headers['user-agent']}' encoding:'${req.headers['accept-encoding']}'`)
        if(process.env.LOG_BODY == 'true') process.stdout.write(`[BODY] ${JSON.stringify(req.body)} `)
        if(process.env.LOG_AUTHORIZATION == 'true') process.stdout.write(`[AUTH] ${req.headers['authorization'] ? req.headers['authorization'] : "No Auth token were sent"}`)
        console.log('')
    }
}

module.exports = httpLogger;