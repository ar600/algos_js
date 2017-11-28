const plusOne = (arr)=>{
  let idx=arr.length-1;
  while (idx>=0) {
    if (arr[idx]<9) {
      arr[idx]++;
      return arr;
    }
    else {
      arr[idx]=0;
      if (arr[idx-1] == 'undefined' ) {
        arr.unshift(1);
        break; //or return arr
      }
      //no need to mention else, since we are reurning a value on above
      idx--;
    }//else end
  }//while end
  return arr;
}//end of function

console.log(plusOne([9,0,9,9]));
