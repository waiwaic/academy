<?php
include 'dbh.php';
$dbh=new dbh();
$sth=$dbh->prepare('SELECT tagid,title,content FROM discuss');
$sth->execute();
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
