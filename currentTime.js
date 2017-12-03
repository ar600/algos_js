<!DOCTYPE html>
<html>
<head>

// adding 0 in front of minutes or seconds if less than 10
const checkTime = (i)=>{
  if (i<10) {i="0"+i;}
  return i;
}
const displayTime = ()=>{
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('showTime').innerHTML =h + ":" + m + ":" + s;
  let t = setTimeout(displayTime,500);
}
</script>
</head>

<body onload="displayTime()">
<!-- //displaying current time with vanilla javascript -->
Current time is:
<div id="showTime"></div>

</body>

</html>
