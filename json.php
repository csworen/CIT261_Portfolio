<?php

   $json = json_decode($_GET['json'], true);

   if ($json != null) { /* sanity check */
     $file = 'js/todoList.json';
	 file_put_contents($file, json_encode($json));
   } else {
     // handle error 
   }
?>