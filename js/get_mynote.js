xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_mynote.php",true);
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
	notes=JSON.parse(xmlhttp.responseText);
	parentNode=document.getElementById('template').parentNode;
	for(i=0;i<notes.length;++i){
		clonenode=document.getElementById('template').cloneNode(true);
		clonenode.setAttribute('id','mynote'+i);
		clonenode.childNodes[1].childNodes[1].innerHTML=notes[i]['title'];
		clonenode.childNodes[1].childNodes[5].innerHTML=notes[i]['content'];
		parentNode.append(clonenode);
	}
}
	document.getElementById('template').remove();
}
xmlhttp.send();
