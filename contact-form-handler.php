<?php 
    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $message = $_Post['message'];
  
    $email_from = 'jackrock243@gmail.com';
    $email_subject = "New from submission";
    $email_body = "User Name: $name.\n".
                    "User e-mail: $visitor_email.\n".
                    "User message: $message.\n";

    $to = "truzzo2002@gmai.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>