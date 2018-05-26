<?php
if(isset($_GET['search'])){
include 'dbh.php';
$dbh=new dbh();
$sth=$dbh->prepare('SELECT * FROM video WHERE name LIKE ?');
$sth->execute(array('%'.$_GET['search'].'%'));
echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
}
