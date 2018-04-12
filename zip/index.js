
// const fs = require("fs")
// const zlib = require("zlib")



// const zip = zlib.createGzip()
// const gunzip = zlib.createGunzip()

// const fStream = fs.createReadStream("./demo/demo.txt")
// const wStream = fs.createWriteStream("./demo/haha.txt.gz")
// const fStream2 = fs.createReadStream("./demo/haha.txt.gz")
// const wStream2 = fs.createWriteStream("./demo/hahah.txt")




// fStream.pipe(zip).pipe(wStream)
// fStream2.pipe(gunzip).pipe(wStream2)

// const http = require("http")
// const Server = http.createServer((req,res) => {
//     const acceptEncoding = req.headers["accept-encoding"]
//     let gzip
//     if(acceptEncoding.indexOf("zip") != -1) {
//         gzip = zlib.createGzip()
//         res.writeHead({
//             'Content-Encoding': "gzip"
//         })
//         fs.createReadStream(filepath).pipe(gzip).pipe(res)
//     }else{
//         fs.createReadStream(filepath).pipe(res)
//     }
// })

// Server.listen(3000)

// const http = require("http")
// const resTest = "asdasd"

// const Server = http.createServer((req,res) => {
//     const acceptEncoding = req.headers['accept-encoding']
//     if(acceptEncoding.indexOf("gzip") != -1) {
//         res.writeHead({
//             'Content-Encoding': "gzip"
//         })
//         res.end(zlib.gzipSync(resTest))
//     } else{
//         res.end(resTest)
//     }
// })

// Server.listen(8080)

