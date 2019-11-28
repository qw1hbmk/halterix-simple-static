<?php
if(isset($_POST['submit'])){
	$to = "yw1hbmk@gmail.com";
	$from = $_POST['email'];
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$subject2 = "Copy of your email: " . $subject;
	$message = $from . " / " . $name . " wrote the following:" . "\n\n" . $_POST['message'];
	$message2 = "Thanks for getting in contact with me. I try to reply within a day or two. Here's a copy of your message. " . "\n\n" . $_POST['message'];
	$headers = "From:" . $to;
	$headers2 = "From:" . $to;
	mail($to, $subject, $message, $headers);
	mail($from, $subject2, $message2, $headers2);
}