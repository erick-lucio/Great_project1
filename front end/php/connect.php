<?php
$servername = "35.198.26.170";
$username = "arduino";
$password = "erickgostoso";
$dbname = "banco1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



?>