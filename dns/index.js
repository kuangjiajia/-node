const dns = require("dns")

dns.lookup("www.qq.com",(err,results,family) => {
    console.log("ip :" + results)
})


dns.lookup("www.qq.com",{all:true},(err,results,family) => {
    console.log("all :" + JSON.stringify(results))
})