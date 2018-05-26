xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_course.php",true);
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
document.getElementById("mycourse").innerHTML=xmlhttp.responseText;
}
}
xmlhttp.send();
