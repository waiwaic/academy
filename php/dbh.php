<?php
class dbh extends PDO{
	public function __construct(){
		$file=parse_ini_file('database.ini');
		$dsn="$file[driver]:host=$file[host];dbname=$file[dbname]";
		parent::__construct($dsn,$file['username'],$file['password'],array(PDO::ATTR_PERSISTENT=>true));
	}
}
