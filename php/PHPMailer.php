<?php

date_default_timezone_set('Etc/UTC');

// Edit this path if PHPMailer is in a different location.
require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

/*
 *  Variables from Contact form
 */

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
    
$mail->isSMTP();

/*
 * Server Configuration
 */

$mail->Host = 'smtp.gmail.com';                 // Which SMTP server to use.
$mail->Port = 587;                              // Which port to use, 587 is the default port for TLS security.
$mail->SMTPSecure = 'tls';                      // Which security method to use. TLS is most secure.
$mail->SMTPAuth = true;                         // Whether you need to login. This is almost always required.
$mail->Username = "snoop.monotone@gmail.com";   // Your Gmail address.
$mail->Password = "ytjtktzrhuemgqph";           // Your Gmail login password or App Specific Password.

/*
 * Message Configuration
 */

$mail->setFrom('snoop.monotone@gmail.com', 'Website Contact Form'); // Set the sender of the message.
$mail->addAddress('wbalaile@live.com', 'Kiganjani Co.');          // Set the recipient of the message.
$mail->Subject = $subject;                                           // The subject of the message.

/*
 * Message Content - Choose simple text or HTML email
 */
 
// Choose to send either a simple text email...
$mail->Body = "Contact Name: ".$name."\n" . "Email Address: ".$email."\n\n" .$message; // Set a plain text body.

// ... or send an email with HTML.
//$mail->msgHTML(file_get_contents('contents.html'));
// Optional when using HTML: Set an alternative plain text message for email clients who prefer that.
//$mail->AltBody = 'This is a plain-text message body'; 

// Optional: attach a file
$mail->addAttachment('images/phpmailer_mini.png');

// On Submit
if ($mail->send()) {
    echo "<script type='text/javascript'>alert('submitted successfully!')</script>"; //echo "Your message was sent successfully!";
} else {
    echo "<script type='text/javascript'>alert('failed!')</script>";                 //echo "Mailer Error: " . $mail->ErrorInfo;
}

header("Location: https://kiganjani.co.tz");

?>       