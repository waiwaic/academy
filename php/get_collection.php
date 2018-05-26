<?php
session_start();
if(isset($_SESSION[id])){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('SELECT id, name FROM video WHERE id IN ('.join(',',$_SESSION['collection']['video']).')');
	$sth->execute();
	echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
}else{
	echo false;
}
