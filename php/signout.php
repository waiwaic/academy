<?php
session_start();
if(isset($_SESSION[id])){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('UPDATE users SET session=? WHERE id=?');
	$sth->execute(array(session_encode(),$_SESSION[id]));
	session_unset();
	session_destroy();
}
