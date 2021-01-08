const fs = require('fs');

// 阻塞代码实例
// const txt = fs.readFileSync('./test.txt');
// console.log(txt.toString());
// console.log("执行程序结束")

// 非阻塞代码实例
fs.readFile('./test.txt',function(err,txt){
  if(err) return console.log(err);
  console.log(txt.toString());
})
console.log("执行程序结束")

// 阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，就需要写在回调函数内
