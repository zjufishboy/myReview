//无立即执行函数，变量泄漏
function outputNumbers(count){
    for(var i = 0; i < count; ++i){
      console.log(i);
    }
    console.log(i);// 5
  }
outputNumbers(5);



//立即执行函数 阻绝作用域，在执行完后立刻销毁
function outputNumbers(count){
    (function(){
        for(var i = 0; i < count; ++i){
            console.log(i);
        }  
    })();
    console.log(i);//Uncaught ReferenceError: i is not defined
}
outputNumbers(5);