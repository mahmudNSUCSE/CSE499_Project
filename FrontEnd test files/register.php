<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "pfk_database");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$first_name =$_REQUEST['firstname'];
$last_name = $_REQUEST['lastname'];
$dob = $_REQUEST['dob'];
$school_name =  $_REQUEST['schoolname'];
$phone_number =  $_REQUEST['phonenumber'];
$email =  $_REQUEST['email'];
$password = $_REQUEST['password'];
$password2 =  $_REQUEST['password2'];

 echo $first_name;
// Attempt insert query execution
$sql = "INSERT INTO users (first_name, last_name, dob, school_name, phone_number, email, password) VALUES ('$first_name', '$last_name', '$dob', '$school_name', '$phone_number', '$email', '$password')";
if(mysqli_query($link, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>