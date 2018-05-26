xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_me.php",true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		if(xmlhttp.responseText){
			document.getElementById("username").innerHTML=xmlhttp.responseText;
		}else{
			window.location.pathname="./register.html";
		}
	}
}
xmlhttp.send();
