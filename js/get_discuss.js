xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_discuss.php",true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		document.getElementById("discuss").innerHTML=xmlhttp.responseText;
	}
}
xmlhttp.send();
