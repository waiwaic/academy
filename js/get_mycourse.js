xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_mycourse.php",true);
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
	if(xmlhttp.responseText){
		mycourse=JSON.parse(xmlhttp.responseText);
		parentNode=document.getElementById('template').parentNode;
		for(i=0;i<mycourse.length;++i){
			clonenode=document.getElementById('template').cloneNode(true);
			clonenode.setAttribute('id','mycourse'+mycourse[i]['id']);
			clonenode.childNodes[1].setAttribute('href','playing.html?'+videos[i]['id']);
			clonenode.childNodes[3].innerHTML=videos[i]['name'];
			parentNode.append(clonenode);
		}
		document.getElementById("mycourse").innerHTML=xmlhttp.responseText;
	}else{
		window.location="register.html";
	}
}
}
xmlhttp.send();
