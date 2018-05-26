<?php
include 'dbh.php';
$dbh=new dbh();
$sth=$dbh->prepare('SELECT id,name FROM video');
$sth->execute();
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
