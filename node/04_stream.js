/**
 * 流式文件写入
 */

let fs = require('fs');

let ws = fs.createWriteStream('hello2.txt', {

})

// ws.on("open", function() {
//   console.log('流打开了');
// })

ws.once("open", function() {
  console.log('流打开了');
  console.log('-----------------');
})

//通过ws向文件写入内容
ws.write('通过可写流写入文件的内容');
ws.write('我好困啊');
ws.write('我人要困没了');
ws.write('yyds');

//关闭流
// ws.close(); //不能用，关接受那头，会导致数据传输不完全
ws.end();

/**
 * 流式文件读取
 */

//创建一个可读流
let rs = fs.createReadStream('hello2.txt');
let ws2 = fs.createWriteStream('hello4.txt');
//打开流
rs.once("open", function () {
  console.log('可读流打开了');
})
//关闭流
rs.once("close", function () {
  console.log('可读流关闭了');
  //数据读取完毕，关闭可写流
  ws2.end();
})

ws2.once("open", function () {
  console.log('可写流打开了');
})

// ws2.once("close", function () {
//   console.log('可写流关闭了');
// })
//读取流中文件，这里data读了两次
rs.on("data", function (data) {
  console.log(data.toString(), '读取的数据');
  //将读取到的数据写入到hello4.txt
  ws2.write(data);
})

rs.pipe(ws2) //将可读流的东西直接输出到可写流中