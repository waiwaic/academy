function signup(){
	username=document.getElementById('username').value;
	password=document.getElementById('password').value;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			if(xmlhttp.responseText){
				alert("注册成功");
				window.location.pathname="./me.html";
			}else{
				alert("用户名已存在");
			}
		}
	}
	xmlhttp.open("POST","./php/signup.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("username="+username+"&password="+password);
}
