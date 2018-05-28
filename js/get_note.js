xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_note.php",true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		document.getElementById("note").innerHTML=xmlhttp.responseText;
	}
}
xmlhttp.send();
