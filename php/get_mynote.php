<?php
session_start();
if(isset($_SESSION[id])){
	echo json_encode($_SESSION[note]);
}
