<html> 
<head>
 <script> function swap() 
{ 
 
var txt = document.getElementById('t1').value; 
 document.getElementById('t1').value = document.getElementById('t2').value;  document.getElementById('t2').value = txt; 

} 

</script> 
</head> 
<body>

<input type="text" id="t1">            <input type="text" id="t2">
 <br> 
<input type="button" value="Swap" onclick="swap()">
 
</body>
</html