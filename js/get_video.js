xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_video.php",true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		videos=eval(xmlhttp.responseText);
		parentNode=document.getElementById('template').parentNode;
		for(i=0;i<videos.length;++i){
			clonenode=document.getElementById('template').cloneNode(true);
			clonenode.setAttribute('id','video'+videos[i]['id']);
			clonenode.childNodes[1].setAttribute('href','details.html?'+videos[i]['id']);
			clonenode.childNodes[3].innerHTML=videos[i]['name'];
			parentNode.append(clonenode);
		}
		parentNode.removeChild(document.getElementById('template'));
	}
}
xmlhttp.send();
