<?php

$email = filter_input(INPUT_GET, 'email');

if(isset($_POST["submit"])) {
$email = $_POST["email"];
mail($email, "Here is the subject line",

$_POST["insert your message here"]. "From: asd@email.address");

}

?>