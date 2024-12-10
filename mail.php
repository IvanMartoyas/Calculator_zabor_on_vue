<?php

$title = "Undefined name";
echo 'send';
if(isset($_POST['title'])){
    $name = $_POST['title'];
}

$message = "<p>Hi!</p>";
$message .= "<p>Wazaaaaa $name</p>";

$to_email = 'dest@mail.com';
$subject = 'Mail subject';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Biloo <noreply@ydomain.com>';

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>