xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_discuss.php?parent=0",true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		discuss=JSON.parse(xmlhttp.responseText);
		parentNode=document.getElementById('template').parentNode;
		for(i=0;i<discuss.length;++i){
			clonenode=document.getElementById('template').cloneNode(true);
			clonenode.setAttribute('id','discuss'+discuss[i]['id']);
			clonenode.childNodes[1].innerHTML=discuss[i]['title'];
			clonenode.childNodes[3].innerHTML=discuss[i]['datetime'];
			clonenode.childNodes[5].childNodes[3].childNodes[3].innerHTML=discuss[i]['content'];
			parentNode.append(clonenode);
		}
		parentNode.removeChild(document.getElementById('template'));
	}
}
xmlhttp.send();
