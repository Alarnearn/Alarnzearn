# Alarnzearn

#二、Vue组件
##1.axios与fetch实现数据请求
&nbsp;&nbsp;&nbsp;&nbsp;(1)fetch(W3C标准)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前未普遍用原因:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`XMLHttpRequest`是一个设计粗糙的`API`，配置和调用的方式非常混乱，而且基于事件的异步模型写起来不友好。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;兼容性不好
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 注意：`Fetch`请求默认的是不带`cookie`的，需要设置`fetch(url,{credentials:'include'})`
&nbsp;&nbsp;&nbsp;&nbsp;(2)axios
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`axios.get("")  promise对象`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `axios.post("")  promise对象`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`axios.put("")`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` axios.delete("")`

        ```axios({
            url:'/gateway?type=2',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            console.log(res.data)
        })
        返回的数据会被包装

        {
            *:*
            data:真实的后期数据
        }
```
        ------------------------------------
  ```      
        // post - json字符串
        let baseURL = 'http://localhost:8888'
        let url = '/user/login'
        
        axios({
            url,
            baseURL,
            method:"POST",
            data:{                // axios会自动将data中对象转换为json字符串，而jquery是将其转换为查询字符串
                username:"admin1",
                password:"123321"
            }
            }).then(response => {   // axios基于承诺对象，axios() 实际上发送了请求并且返回了一个承诺对象
            // axios会对response进行二次封装
            console.log(response.data.data.token);
        })
```
##2.计算属性
   &nbsp;&nbsp;&nbsp;&nbsp; 复杂逻辑，模板难以维护
    &nbsp;&nbsp;&nbsp;&nbsp;(1) 基础例子
    &nbsp;&nbsp;&nbsp;&nbsp;(2) 计算缓存  VS  methods
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a.计算属性是基于它们的依赖进行缓存的
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b.计算属性只有在它的相关依赖发生改变的时候才会重新求值
    &nbsp;&nbsp;&nbsp;&nbsp;(3) 计算属性  VS  watch
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; v-model

&nbsp;&nbsp;&nbsp;&nbsp;计算属性-模糊查询：
    &nbsp;&nbsp;&nbsp;&nbsp;写一个计算属性
    ```
    v-for="data in getMyDatalist"  v-model="mytext"

    computed:{
        getMyDatalist(){
            return this.datalist.filter(item=>item.indexOf(this.mytext)>-1)
        }
    }
```
##3.Mixins
    &nbsp;&nbsp;&nbsp;&nbsp;虚拟dom和diff算法
      &nbsp;&nbsp;&nbsp;&nbsp;  最大程度保证组件和节点的可复用性，减少了对于DOM的频繁操作，增加网页利用性。
   &nbsp;&nbsp;&nbsp;&nbsp; 1）把树按照层级分解
   &nbsp;&nbsp;&nbsp;&nbsp; 2）同`key`值对比  没有`key`值就是盲目对比，
   &nbsp;&nbsp;&nbsp;&nbsp; 3）同组件对比
       ` only<div> `      `component`

##5.组件化开发基础
    &nbsp;&nbsp;&nbsp;&nbsp;扩展HTML元素，封装可重用的代码

##6.组件注册方式
   &nbsp;&nbsp;&nbsp;&nbsp; a.全局组件
    &nbsp;&nbsp;&nbsp;&nbsp;    `Vue.component`
&nbsp;&nbsp;&nbsp;&nbsp;    b.局部组件
&nbsp;&nbsp;&nbsp;&nbsp;        局部组件不可以随便使用

##7.组件缩写方式与Vue实例的区别
 &nbsp;&nbsp;&nbsp;&nbsp;   *自定义组件需要有一个root element
&nbsp;&nbsp;&nbsp;&nbsp;  *父子组件的data是无法共享的,父子组件之间的作用域是隔离的
&nbsp;&nbsp;&nbsp;&nbsp;    *组件可以有data,methods,computed....,但是data必须是一个函数

##8.组件通信
   &nbsp;&nbsp;&nbsp;&nbsp; 1.父子组件传值（props down,events up）属性向下传，如果传动态值要用冒号v-bind绑定动态值。如果组件是已经写好的，但是使用时又不确定是否使用有误，可以在组件设置属性验证。
        通过属性往子组件传递，属性传值，如果要传父组件状态，别忘了动态绑定. 父传子的时候，子组件用props接收，孩子可以用this.值名随便使用.
        子传父靠事件，事件定义在父组件里面.(事件符名字可以随便起，子组件传的时候的$符号是固定触发事件的方法)

   &nbsp;&nbsp;&nbsp;&nbsp; 2.属性验证
       ` props:{name:Number}`
       ` Number,String,Boolean,Array,Object,Function,null(不限制类型)`
   &nbsp;&nbsp;&nbsp;&nbsp; 3.事件机制
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       a.使用$on(eventName)监听事件
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        b.使用$emit(eventName)触发事件
&nbsp;&nbsp;&nbsp;&nbsp;   4.Ref
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        ref放在标签上拿到的是原生节点；ref放在组件上，拿到的是组件对象。
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       父传子可以直接用，但不推荐使用，因为耦合度太高，需要对孩子命名。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       ` <input ref="mytext" /> this.$refs.mytext.value`
&nbsp;&nbsp;&nbsp;&nbsp;    5.事件总线（中央事件组件）
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        非父子通信
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        `var bus = new Vue();`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        *`mouted`生命周期中进行监听
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        只要一个组件愿意用`$on()`来监听，就有另一个组件能够用`$emit()`来触发,但是触发的名字要与坚挺的名字一致，否则就匹配不上。
        
##9.动态组件
&nbsp;&nbsp;&nbsp;&nbsp;    <component>元素，动态地绑定多个组件到它的is属性
&nbsp;&nbsp;&nbsp;&nbsp;    <keep-alive>保留状态，避免重新渲染
