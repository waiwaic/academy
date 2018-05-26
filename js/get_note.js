xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/get_note.php",true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		notes=eval(xmlhttp.responseText);
		parentNode=document.getElementById('template').parentNode;
		for(i=0;i<notes.length;++i){
			clonenode=document.getElementById('template').cloneNode(true);
			clonenode.setAttribute('id','note'+notes[i]['id']);
			clonenode.childNodes[1].childNodes[1].innerHTML=notes[i]['title'];
			clonenode.childNodes[1].childNodes[5].innerHTML=notes[i]['content'];
			clonenode.childNodes[1].childNodes[7].childNodes[0].childNodes[1].nodeValue=notes[i]['username'];
			clonenode.childNodes[1].childNodes[7].childNodes[2].innerHTML=notes[i]['datetime'];
			parentNode.append(clonenode);
		}
		parentNode.removeChild(document.getElementById('template'));
	}
}
xmlhttp.send();
