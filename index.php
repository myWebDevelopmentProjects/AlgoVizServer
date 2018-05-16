<?php
include "classes/Server.php";
$Server = new Server();
$initLinks = $GLOBALS['Server']->initLinks();
$start = $GLOBALS['Server']->start();

