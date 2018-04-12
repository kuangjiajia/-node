const fs = require("fs")


//读取data

//同步读取data
// const data = fs.readFileSync("./demoDir/demo.txt") //默认buffer
// console.log(data) //buffer类型
//转为utf8
// method1
// 直接data.toString()
// method2
// 在readFileSync中+编码类型

//异步读取data

// fs.readFile("./demoDir/demo.txt",(err,data) => { //这样读出来是buffer...
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(data) //buffer
//         console.log(data.toString('utf8')) 
//         console.log(data.toString())
//     }
// })
// 为了得到我们的utf8
// readFile还有第二个参数,这个参数可以指定编码
// fs.readFile(url,encode,callback)

// 流的读取文件

// fs.createReadStream(path[, options])
// options 配置
// flags <string>
// encoding <string>
// fd <integer>
// mode <integer>
// autoClose <boolean>
// start <integer>
// end <integer>

// const stream = fs.createReadStream("./demoDir/demo.txt")
// const arr = []
// let dt = ''
// stream.on("data",chunk => {
//     arr.push(chunk)
//     dt += chunk
// }).on("close",() => {
//     console.log("close")
// }).on("end",() => {
//     console.log(arr.toString())
//     console.log(dt.toString())
// }).on("error",err => {
//     console.log(err)
// })



//data/error end close 自我感觉执行顺序


// 写入文件 异步
// fs.writeFile("./demoDir/demo.txt","this is what I add 2", (err) => {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log("success ")
//     }
// })
//第三个参数是编码类型 默认utf8

//写入文件 同步
// fs.writeFileSync("./demoDir/demo.txt","ni hao a")
//第三个参数是编码类型 默认utf8

//写入文件 
// fs.createWriteStream(path[, options])
// const ws = fs.createWriteStream("./demoDir/demo.txt")
// // ws.on('close', function(){  // 已经关闭，不会再有事件抛出
// //     console.log('已经关闭');
// // });

// ws.write('hello  ');
// // console.log(ws.bytesWritten);
// ws.write('world');
// ws.end('');


//判断路径类型
// fs.stat("./demoDir/demo.txt",(err,files) => {
//     if(err) {
//         console.log("type err")
//         return
//     }
//     if(files.isDirectory()) {
//         console.log("dir")
//     }else{
//         console.log("file")
//     }
// })

//判断文件是否存在
// fs.access("./demoDir",err => {
    // if(err) throw err
//     console.log("success")
// })

// 创建文件夹 文件夹已存在会报错哦
// fs.mkdir("./haha",err => {
//     if(err) throw err
//     console.log("success")
// })
// fs.mkdirSync("./mdzz")

// fs.writeFileSync("./mdzz/haha.txt","sadasd")

// fs.unlink("./mdzz/haha.txt",err => {
//     if(err) {
//         console.log(err)
//     }
//     console.log("delete success")
// })
// fs.unlinkSync("./mdzz/haha.txt")


//遍历目录
// 同步
// const path = require("path")
// function readdirDemo(paths) {
//     const arr = []
//     const fileArr = []
//     const files = fs.readdirSync(paths)
//     console.log(files)
//     files.forEach(file => {
//         const type = fs.statSync(path.resolve(__dirname,file) , "utf8")
//         if(type.isDirectory()) {
//             arr.push(file)
//         }else if(type.isFile()){
//             fileArr.push(file)
//         }
//     })
//     console.log(arr)
//     console.log(fileArr)
// }

// readdirDemo("./")

// const path = require("path")
// function readdirDemo(pathName) {
//     fs.readdir(pathName,(err , files) => {
//         if(err) throw err
//         files.forEach(item => {
//             fs.stat(path.join(__dirname,item),(err,file) => {
//                 if(err) throw err
//                 if(file.isDirectory()) {
//                     console.log("dir:" + item)
//                 }else if(file.isFile()){
//                     console.log("file:" + item)
//                 }
//             })
//         })
//     })
// }
// readdirDemo("./")


// 文件重命名
// fs.rename("./kuangjiajia.txt","./zhonglin.txt",(err) => {
//     if(err) {
//         console.log(err)
//         return 
//     }
//     console.log("success")
// })

// fs.renameSync("./zhonglin.txt","./kuangjiajia.txt")

// fs.watchFile("./kuangjiajia.txt",{persistent: true,interval: 2000},(err,prev) => {
//     console.log(prev.mtime)
// })
// fs.open("./kuangjiajia.txt","r+",(err) => {})

// fs.appendFile("./kuangjiajia.txt","this is what I add","utf-8",(err) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("succeess")
// })






