function signin(){
username=document.getElementById('username').value;
password=document.getElementById('password').value;
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200){
		if(xmlhttp.responseText){
			window.location.pathname="./me.html";
		}else{
			alert("帐号或密码错误，请重新输入");
		}
	}
}
xmlhttp.open("POST","./php/signin.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("username="+username+"&password="+password);
}
