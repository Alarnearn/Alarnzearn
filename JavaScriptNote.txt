
1.初步认识JavaScript
    顺序执行、弱编程语言

    带返回值的函数
    1.返回值

    var     全局作用域声明
        变量的声明会提升，函数也会提升。并且函数提升的优先级比变量要高。
        函数的声明方式：
            function 函数名(){
                函数会整体提升
            }

            var a = function(){
                只有函数名会提升
            }

    let (ES6)   使用let可以重新赋值
    const/constant 常量的缩写(ESC2015)   不能改动不能重新赋值
        注：const声明的是一个常量，用const需要初始化，没有初值会报错。
    处理数组或者对象的时候可以直接改变值，不能重新设置这个东西

2.数据类型：String、Numbers、Boolean、null、undefined、Symbol(ES6定义的数据类型)
    主要的原始数据类型：String、Numbers、Boolean、null、undefined
    js中没有分浮点和整型        
    js中null是对象，js的执行会先查看值的标记类型，对象类型标记为0，null标记为null指针，一旦有返回值，null的标记结果就为0，typeof null返回值为false。

3.字符串:
    拼接方式
        1.使用 + 可以直接拼接
        2.在ES6或ESC2015中直接用模板字符串(使用反引号``,当要用变量按照语法$符号和大括号{},写入变量的名字)
        eg：const hello = `My name is ${name} and my age is ${age}`;
            console.log(hello);
    属性和方法(注：属性没有括号,方法才会用到括号,方法是一个函数对象)
        字符串中的字符数量可用length属性  变量.length  
        uppercase/lowcase 方法转化成大写/小写 变量.toUpperCase()/变量.toLowCase()
        substring进行字符截取  变量.substring()   有两个索引，开始和结束位置       
        split进行字符串分割到数组中  变量.split()    括号里面带参数，就是你要按什么分割每个字符， 直接不写空格用''
4.数组 
    在JS中同一个数组可以保存不同类型值。
    JS是动态语言，例如声明一个字符串，不必特意写成string之类的。

    在JS超集TypeScript中,在基本功能上添加了新功能,静态输入也在其中。
        push()方法可在数组末尾进行添加
        unshift()在数组开头添加
        pop()删除数组最后一项
        Array.isArray()判断是否是数组
        indexOf()查找某一个值的索引位置
    
    （一）修改器方法(下面的这些方法会改变调用它们的对象自身的值)

    Array.prototype.copyWithin() 
        在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值。
    Array.prototype.fill() 
        将数组中指定区间的所有元素的值，都替换成某个固定的值。
    Array.prototype.pop()
        删除数组的最后一个元素，并返回这个元素。
    Array.prototype.push()
        在数组的末尾增加一个或多个元素，并返回数组的新长度。
    Array.prototype.reverse()
        颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
    Array.prototype.shift()
        删除数组的第一个元素，并返回这个元素。
    Array.prototype.sort()
        对数组元素进行排序，并返回当前数组。
    Array.prototype.splice()
        在任意的位置给数组添加或删除任意个元素。
    Array.prototype.unshift()
        在数组的开头增加一个或多个元素，并返回数组的新长度。
    
    （二）访问方法(这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值)

    Array.prototype.concat()
        返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
    Array.prototype.includes() 
        判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false。
    Array.prototype.join()
        连接所有数组元素组成一个字符串。
    Array.prototype.slice()
        抽取当前数组中的一段元素组合成一个新数组。
    Array.prototype.toSource() 
        返回一个表示当前数组字面量的字符串。遮蔽了原型链上的 Object.prototype.toSource() 方法。
    Array.prototype.toString()
        返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法。
    Array.prototype.toLocaleString()
        返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法。
    Array.prototype.indexOf()
        返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。
    Array.prototype.lastIndexOf()
        返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。

    （三）迭代方法 (在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。在每一个数组元素都分别执行完回调函数之前，数组的length属性会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做.)

    Array.prototype.forEach()
        为数组中的每个元素执行一次回调函数。
    Array.prototype.entries() 
        返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对。
    Array.prototype.every()
        如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
    Array.prototype.some()
        如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false。
    Array.prototype.filter()
        将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回。
    Array.prototype.find() 
        找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined。
    Array.prototype.findIndex() 
        找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
    Array.prototype.keys() 
        返回一个数组迭代器对象，该迭代器会包含所有数组元素的键。
    Array.prototype.map()
        返回一个由回调函数的返回值组成的新数组。
    Array.prototype.reduce()
        从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
    Array.prototype.reduceRight()
        从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
    Array.prototype.values() 
        返回一个数组迭代器对象，该迭代器会包含所有数组元素的值。
    Array.prototype[@@iterator]() 
        和上面的 values() 方法是同一个函数。

5.对象语法
    对象就是键值对，
    对象可以嵌套,
    解构赋值(ES6新特性)
    添加属性


6.JSON,一种数据格式,在全栈开发中广泛使用,用到API,向服务器发送数据会用到JSON格式,也是接收JSON格式,和对象语法很接近,但JSON键用双引号,字符串也是双引号,JSON没有单引号，有则报错。

    const todos = [
        {
            id:1,
            name:'tom',
            isCompleted: true
        },{
            id:2,
            name:'lily',
            isCompleted: true
        },{
            id:3,
            name:'rose',
            isCompleted: false
        }
    ];

7.for循环
    遍历数组内容
        for(let 任意一个名字 of 数组名字)
        console.log(数组名字);

8.while循环

9.高级数组遍历(迭代数组的方法) 
    forEach,map(从数组中创建新数组),filter(根据条件创建新数组)
    高阶数组方法参数是函数,回掉函数中可以写多个参数,第一个参数就是迭代对象。
    如果写成箭头函数的效果会更好一些。
    forEach和map都是迭代器，filter是选择器

    eg: 
    1.forEach
    todos.forEach(function(){
        console.log(todos.id);
    });

    2.map (在函数中指定用到的变量,map会返回一个常规数组)
    const todoName = todos.map(function(todo){
        retuen todo.name;
    });
    console.log(todoName);

    3.filter
    const todoCompleted = todos.filter(function(todo){
        retuen todo.isCompleted === true;
    });
    console.log(todoCompleted);

    4.链接其他数组方法
    const todoCompleted = todos.filter(function(todo){
        retuen todo.isCompleted === true;
    }).map(function(todo){
        return  todo.name;
    })
    console.log(todoCompleted);

10.条件语句
    if...else...
    else if
    三目操作符/三目运算符   
        条件?'操作1':'操作2'  (条件满足即为真则执行操作1,反之执行操作2)
    switch(){
        case :
            console.log();
            break;
        case :
            console.log();
            break;
        case :
            console.log();
            break;
        default:
            console.log();
    }

11.函数(可以给函数设置形参再通过实参传递，也可以给函数默认参数设置值)
    1.无返回值
    function 方法名(形参){
        console.log();
    }
    方法名(实参);

    2.带有返回值
    function 方法名(形参){
        return 要传递的返回值;
    }
    console.log(方法名(实参));

    3.箭头函数代替关键字function
    const  方法名 = (形参) => {
        return 要传递的返回值;
    }
    console.log(方法名(实参));

    注：如果只有一个参数且返回值只有一个的时候可以更精简
        const 方法名 = ()=> 要传递的返回值;
        console.log(方法名(实参))

12.面向对象编程    
    可以通过构造函数来构建对象,有两种实现方式：
    1.可以用原型实现构造函数 
        创建一个Person对象,当创建函数Person,P要大写。当创建构造函数,首字母要大写,至于参数传入需要设置的属性。要将这些设置为对象的属性,用到this。通过构造函数来实例化对象。要实例化对象，创建一个名为person1的变量，其值为new Person()
        
        内置结构创建新数组

        date结构可以设置Date对象

    2.ES6中的类
        创建一个类,这里和创建结构体函数类似，添加函数，应该说是方法类中的函数叫方法


        两个类操作和实例化实现都一样


13.DOM操作
    在浏览器中打印对象,window对象是浏览器的父对象。
        举例alert函数，他是Window对象中的一部分,也可以这样使用: window.alert();
    window 是很高级别不需要写window. 一切皆window对象
        举例其他对象,像forInstance、localStorage(在浏览器中存储的一种方式),也是window对象一部分。还可以获取(页面)内高,innerHeigh,innerWidth属性。window对象中的fetch方法
    document 构成DOM的文档对象模型。通过document从文档中选东西,键入document,选择单一元素的方法是使用getElementByID(),可以传入id值,
    DOM操作如何取得元素
    查询选择器，querySelector() 选择单一元素的大部分。
    多项元素选择器，querySelectorAll() 选择多个元素，可以对其使用数组，里面可以放id，类，标签
        getElementByClassName()内只能放item，且所得到的是html集合，html集合的区别是不能对其使用数组，如果想用数组，必须手动转换成数组

    举例按钮鼠标点击监听事件
    btn.addEventListener('click',(e) =>{
        e.preventDefault();
    })
    需要指定两件事，本例中的事件键入click获取所有这些，第一个是(click)事件，第二个是函数，当事情发生是运行的函数
    阻止默认行为


14.this.关键字



---------------需要拓展学习-------------
setTimeout()函数时间设置

typeof的返回值：string、boolean、undefined、number、object、function

会改变原数组的数组API:reverse、split、

点方法   person.name
括号法   1) person['name']
        2) let slection = 'name';
           person[slection] =

数组更新检测
    1）试用一下方法操作数组，可以检测变动
        push()  pop()  shift()  unshift()  splice()  sort()   reverse()
    
    2）filter()  contact()  和 slice()  map() 新数组替换旧数组 因为这些方法并不会改变原数组

    3）不能检测以下变动的数组

    vm.items[indexOfItem] = newValue
    解决：a. Vue.set(example1.items,indexOfItem, newValue)    
          b. splice
