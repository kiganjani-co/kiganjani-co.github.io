<?php

if(isset($_POST['submit'])){

    // Form Data
    $fname = $_POST['First Name'];
    $lname = $_POST['Last Name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Recipient
    $MailTo = "info@kiganjani.co.tz";
    $MailHeader = "From: ".$email;
    $Content = "Mail from ".$fname."\n\n".$message;

    // Send Email
    mail($MailTo, $subject, $Content, $MailHeader) or die ("Error!");
   
    echo "Thank You!";
}
?>