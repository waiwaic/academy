<?php
session_start();
if(isset($_SESSION)){
	echo json_encode($_SESSION[course]);
}
