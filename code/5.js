//节流函数

let canRun = true;
function throttle(fn,wait=50){
  if (!canRun){
    return;
  }
  canRun = false;
  setTimeout(function() {
    fn()
    canRun = true;
  }, wait);
}

throttle(()=>console.log("throttle"),5000)
throttle(()=>console.log("throttle"),5000)
//只输出一遍，因为这里限制了5000ms内只执行一次
