<?php
session_start();
if(isset($_SESSION['id'])){
	if(!$_SESSION['collection']){
		$_SESSION['collection']=array();
		$_SESSION['collection']['video']=array();
		$_SESSION['collection']['note']=array();
	}
	if($_POST['video']){
		if(!in_array($_POST['video'],$_SESSION['collection']['video'])){
			include 'dbh.php';
			$dbh=new dbh();
			/*$sth=$dbh->prepare('SELECT name FROM video WHERE id=?');
			$sth->execute(array($_POST['video']));*/
			$_SESSION['collection']['video'][]=$_POST['video'];
			$sth=$dbh->prepare('UPDATE users SET session=? WHERE id=?');
			$sth->execute(array(session_encode(),$_SESSION['id']));
			echo true;
		}else{
			echo false;
		}
	}
	if($_POST['note']){
		
	}
}
