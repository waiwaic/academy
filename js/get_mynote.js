xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_mynote.php",true);
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
document.getElementById("mynote").innerHTML=xmlhttp.responseText;
}
}
xmlhttp.send();
