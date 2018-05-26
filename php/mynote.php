<?php
session_start();
if(isset($_SESSION[id])){
	if(!$_SESSION[note])
		$_SESSION[note]=array();
	$_SESSION[note][]=array('title'=>$_POST[title],'content'=>$_POST[content],'audit'=>false);
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('UPDATE users SET session=? WHERE id=?');
	$sth->execute(array(session_encode(),$_SESSION[id]));
	$sth=$dbh->prepare('INSERT INTO note(title,content,username,datetime) VALUES (?,?,?,NOW())');
	$sth->execute(array($_POST['title'],$_POST['content'],$_SESSION['username']));
}

