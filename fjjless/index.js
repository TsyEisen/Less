
var fs = require('fs');
var less = require('less');
var path = require('path');
var args = process.argv.slice(2);//获取终端输入的参数
var srcPath = args[0];
var distPath = args[1];

// 1. 开始监视文件的变化
fs.watchFile(srcPath, {
  interval: 1000
}, function(curr, prev) {
  // 2. 当文档发生变化的时候，读取该文件，获取less文件的内容
  fs.readFile(srcPath,'utf-8',function(err, data) {
    if (err) {
      throw err
    }
    console.log(data.toString());
    // 3、less用法
    less.render(data,function(err,css) {
      if (err) {
        throw err
      }
	console.log(css)
      //  4. 将编译转换之后的 css 字符串写入新的文件
      fs.writeFile(distPath, css.css, function(err) {
        if (err) {
          throw err
        }
        console.log('success')
      })
  })
})


})
