<?php

try
	{
	 $dsn = "mysql:host=mysli.oamk.fi;dbname=opisk_t9tkdm00";
	 $db = new PDO ($dsn, "t9tkdm00", "hA3tweSmrZTy6Ymp");
	 print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode () . "\n");
	 print ("Error message: " . $e->getMessage () . "\n");
    }
    
?>