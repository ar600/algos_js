const stairs = (n,memo=[0,1,2,3]) =>{

  if (memo[n]) return memo[n];
  else {
    memo.push(stairs(n-1,memo)+stairs(n-2,memo));
    return memo[n];
  }
}
console.log(stairs(1100));
