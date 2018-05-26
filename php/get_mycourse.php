<?php
session_start();
if(isset($_SESSION[id])){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('SELECT * FROM course');
	echo json_encode($_SESSION[course]);
}else{
	echo false;
}
