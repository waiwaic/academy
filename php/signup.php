<?php
session_start();
if(isset($_POST)){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('INSERT INTO users(username,password) VALUES (?,?)');
	$sth->execute(array($_POST[username],$_POST[password]));
	if($sth->rowCount()){
		$sth=$dbh->prepare('SELECT id FROM users WHERE username=?');
		$sth->execute(array($_POST[username]));
		$_SESSION[id]=intval($sth->fetch()[id]);
		$_SESSION[username]=$_POST[username];
		$sth=$dbh->prepare('UPDATE users SET session=? WHERE id=?');
		$sth->execute(array(session_encode(),$_SESSION[id]));
		echo true;
	}else{
		echo false;	
	}
}
