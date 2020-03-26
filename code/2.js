Array.prototype.fakeMap = function fakeMap(fn, context){
    if (typeof fn !== "function") {
      throw new TypeError(`${fn} is not a function`);
    }
    
    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      // 迭代
      let result = fn.call(context, arr[i], i, arr);
      res.push(result);
    }
    return res;
  };

[1,2,3,4].fakeMap((item,index,arr)=>{console.log(item,index,arr)})