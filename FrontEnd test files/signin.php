<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "pfk_database");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security

$email =  $_REQUEST['email'];
$password = $_REQUEST['password'];

// Attempt insert query execution
$sql = "SELECT * FROM users WHERE (email='$email' and password= '$password')";
$result = mysqli_query($link, $sql);
if(mysqli_num_rows($result)>0){
    while ($row = mysqli_fetch_array( $result, MYSQLI_ASSOC )) {
    echo print_r($row);       // Print the entire row data
}
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>