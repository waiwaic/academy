<?php
include 'dbh.php';
$dbh=new dbh();
$sth=$dbh->prepare('SELECT id,title,content,upvote,browse,username,datetime FROM note WHERE audit=1');
$sth->execute();
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));

