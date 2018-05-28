function mycourse(){
course=window.location.search.substr(1);
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200){
		if(xmlhttp.responseText){
			alert("已添加到我的课程");
		}else{
			alert("您已添加此课程");
		}
	}
}
xmlhttp.open("POST","./php/mycourse.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("course="+course);
}
