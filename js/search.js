search=window.location.search.substr(1);
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","./php/search.php?"+search,true);
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		res=JSON.parse(xmlhttp.responseText);
		parentNode=document.getElementById('template').parentNode.parentNode;
		for(i=0;i<res.length;++i){
			clonenode=document.getElementById('template').cloneNode(true);
			clonenode.setAttribute('id','video'+res[i]['id']);
			clonenode.childNodes[1].childNodes[1].childNodes[1].childNodes[1].setAttribute('src','./video_logo/'+res[i]['id']);
			clonenode.childNodes[1].childNodes[1].childNodes[1].setAttribute('href','./details.html?'+res[i]['id']);
			clonenode.childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerHTML=res[i]['name'];
			parentNode.append(clonenode);
		}
			document.getElementById('template').remove();
	}
}
xmlhttp.send();

