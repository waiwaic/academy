<?php
session_start();
if(isset($_SESSION)){
	if(!$_SESSION[course])
		$_SESSION[course]=array();
	if(!in_array($_POST[course],$_SESSION[course])){
		$_SESSION[course][]=$_POST[course];
		include 'dbh.php';
		$dbh=new dbh();
		$sth=$dbh->prepare('UPDATE users SET session=? WHERE id=?');
		$sth->execute(array(session_encode(),$_SESSION[id]));
		echo true;
	}else{
		echo false;
	}
}

