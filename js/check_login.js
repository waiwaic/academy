xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/check_login.php",true);
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200){
		if(xmlhttp.responseText){
			window.location.pathname="./me.html";
		}
    	}
}
xmlhttp.send();
