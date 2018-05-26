<?php
if(isset($_GET['parent'])){
include 'dbh.php';
$dbh=new dbh();
$sth=$dbh->prepare('SELECT id,title,content,datetime FROM discuss WHERE parent=?');
$sth->execute(array($_GET['parent']));
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
}
