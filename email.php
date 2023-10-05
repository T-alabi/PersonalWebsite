<?php
$to = $_POST['recipient'];
$sub = $_POST['subject'];
$msg = $_POST['message'];
$head = "From: " . $_POST['email'] . "\r\n" . "CC: " . $_POST['email'];

mail($to, $sub, $msg, $head);
echo "<script>alert('Your email was sent! Check your sending email for a copy.');document.location='contactMe.html'</script>";

?>