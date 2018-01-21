<?php
$recipient = $_POST['email'];
$subject = "Mail from the car financing site";
$name = $_POST['firstName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$carPrice = $_POST['carPrice'];
$anInitialFee = $_POST['anInitialFee'];
$loanTerm = $_POST['loanTerm'];
$monthlyPayment = $_POST['monthlyPaymentInput'];
$mailBody = "Имя: $name \n Email: $email \n Телефон: $phone \n Цена автомобиля: $carPrice \n Первоначальный взнос: $anInitialFee \n Срок кредита: $loanTerm \n Ежемесячный платеж: $monthlyPayment";
mail($recipient, $subject, $mailBody);
echo "Письмо отправлено на вашу почту.";
?>