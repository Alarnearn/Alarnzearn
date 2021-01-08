// 引入events 模块
// const events = require('events');
// 创建 eventEmitter对象
// const eventEmitter = new events.EventEmitter();

const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
event.on('someEvent',function(){
  console.log('someEvent事件触发');
});
setTimeout(function(){
  event.emit('someEvent')
},1000)

console.log('----------')

const se = new EventEmitter();
se.on('SE',function(a,b){
  console.log('listen1',a,b);
})
se.on('SE',function(a,b){
  console.log('listen2',a,b);
})
se.emit('SE','a参数','b参数');

console.log('----------')

const emitter = new EventEmitter();
// 监听器  #1
const listener1 = function listener1(){
  console.log('监听器 listen1 执行。')
}
// 监听器  #2
const listener2 = function listener2(){
  console.log('监听器 listener2 执行');
}
// 绑定l事件，处理函数 listener1
emitter.addListener('l',listener1);
// 绑定l事件，处理函数 listener2
emitter.on('l',listener2);

let listenerCount = emitter.listenerCount('l');
console.log(listenerCount + '个监听器监听事件');

// 处理 l 事件
emitter.emit('l');

// 移除监听事件绑定的listener1函数
emitter.removeListener('l',listener1);
console.log('listener1 不再接受监听');

// 触发连接事件
emitter.emit('l');

listenerCount = emitter.listenerCount('l');
console.log(listenerCount + '个监听器监听事件');

console.log('程序执行完毕')
console.log('----------')