function collect(){
video=window.location.search.substr(1);
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200){
		if(xmlhttp.responseText){
			window.location="./mycollect.html";
		}else{
			alert("您已收藏此视频");
		}
	}
}
xmlhttp.open("POST","./php/collection.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("video="+video);
}
