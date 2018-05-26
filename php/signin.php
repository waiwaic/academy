<?php
session_start();
if(isset($_POST)){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('SELECT id,session FROM `users` WHERE username=? AND password=?');
	$sth->execute(array($_POST[username],$_POST[password]));
	$res=$sth->fetch();
	if($res){
		session_decode($res[session]);
		echo true;
	}else{
		echo false;
	}
}
