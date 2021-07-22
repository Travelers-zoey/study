let fs = require('fs');

//打开文件
fs.open('hello.txt', 'w', function(err, fd) {
  //判断是否出错
  if(!err) {
    //如果没有出错，就对文件进行写入操作
    fs.write(fd, "这是异步写入的内容", function(err) {
      if(!err) {
        console.log('写入成功');
      }

      //关闭文件
      fs.close(fd, function() {
        console.log('文件已关闭');
        console.log('--------------------------------------------');
      })
    })
  }
})

/**
 * 简单文件写入
 */
//flag标识: r——只读，文件不存在则报错；w——写入，文件不存在则创建，覆盖；a——追加，不存在则创建
fs.writeFile('hello.txt', "这是通过writeFile写入的内容", {
  flag: 'a',
}, function (err) {
  if(!err) {
    console.log('writeFile写入成功');
  } else {
    console.log(err);
  }
})

/**
 * 简单文件读取readFile(path, options, callback)
 */

fs.readFile('hello.txt', function (err, data) {
  //返回的data是个buffer，因为可能是jpg等
  if(!err) {
    console.log(data.toString(), '读取hello.txtx 的data')
    //将data写入到文件
    fs.writeFile('hello1.txt', data, function (err) {
      if(!err) console.log('读取hello.txt内容后写入到hello2.txt');
    })
  }
})