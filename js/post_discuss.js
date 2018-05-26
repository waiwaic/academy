function post_discuss(){
tagid=document.getElementById('tagid').selectedIndex;
title=document.getElementById('title').value;
content=document.getElementById('content').value;
xmlhttp=new XMLHttpRequest();
xmlhttp.open("POST","./php/discuss.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("tagid="+tagid+"&title="+title+"&content="+content);
get_discuss();
}
