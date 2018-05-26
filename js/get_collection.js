xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_collection.php",true);
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
	if(xmlhttp.responseText){
		collection=JSON.parse(xmlhttp.responseText);
		parentNode=document.getElementById('videotemplate').parentNode;
		for(i=0;i<collection.length;++i){
			clonenode=document.getElementById('videotemplate').cloneNode(true);
			clonenode.setAttribute('id','video'+collection[i]['id']);
			clonenode.childNodes[1].childNodes[3].childNodes[1].innerHTML=collection[i]['name'];
			clonenode.childNodes[1].childNodes[1].childNodes[1].setAttribute('href','./details.html?'+collection[i]['id']);
			parentNode.append(clonenode);
		}
		parentNode.removeChild(document.getElementById('videotemplate'));
	}else{
		window.location="register.html";
	}
}
}
xmlhttp.send();
