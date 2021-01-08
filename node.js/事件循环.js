// 引入events 模块
const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

// 创建事件处理程序
const eventHandler = function connected(){
  console.log('连接成功');
  // 触发事件
  eventEmitter.emit('received');
}
// 绑定connnection事件处理程序
eventEmitter.on('connection',eventHandler);

// 使用匿名函数绑定事件
eventEmitter.on('received',function(){
  console.log('数据信息接收成功')
})

//触发connection事件
eventEmitter.emit('connection');

console.log('程序已执行完');
console.log('----------------');

const fs = require('fs');
// fs.readFile() 是异步函数用于读取文件
fs.readFile('./test1.txt',function(err,data){
  if(err){
    console.log(err.stack);
    return;
  }
  console.log(data.toString());
})
console.log('程序已执行完毕')