<?php
if(isset($_POST)){
	include 'dbh.php';
	$dbh=new dbh();
	$sth=$dbh->prepare('INSERT INTO `discuss`(`title`, `content`) VALUES (?,?)');
	$sth->execute(array($_POST[title],$_POST[content]));
}
