<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $date = $_POST['date'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    $service = $_POST['item'];

    $mailTo = "igneousant@gmail.com"; //Placeholder Email
    $headers = "From ".$mailFrom "For Service".$service;
    $txt = "An appointment has been made for ".$service "from".$mailFrom.".\n\n".$message;
    $subject = "".$service "For".$date;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsent");
}