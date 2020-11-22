<script>
function add1()
{ 

document.getElementById('div1').innerHTML = document.getElementById('t1').value 
}
</script>
<input type="text" id="t1"> <br> <input type="button" value="Click" onclick="add1()"> <div id="div1"> 
</div>