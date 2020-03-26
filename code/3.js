//debounce函数实现
let timer;//默认是undefined
function debounce(fn,wait=50) {
    if (typeof fn !== "function"){
        throw new TypeError(`${fn} is not a function`);
    }
    
    return function(...args) {
        //...args这个写法是展开参数，表示把参数统一算成一个不定数组
        if(timer) clearTimeout(timer)//undefined,null,0,false,"",NaN==false,但[]是true
        timer = setTimeout(()=> {
            fn.apply(this,args)
        },wait)
    }
  }

//防抖的重点在于以最后一个为起点进行等待，如果在预定时间内再次被触发则再次等待，并且不会累计
debounce(()=>console.log("debounce"),400)()
debounce(()=>console.log("debounce"),400)()
//只会输出一次，这里限制了400ms未触发则触发