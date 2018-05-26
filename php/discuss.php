<?php
if(isset($_POST)){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('INSERT INTO discuss(title,content,datetime) VALUES(?,?,NOW())');
	$sth->execute(array($_POST['title'],$_POST['content']));
}
