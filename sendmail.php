<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);

    // SMTP настройки для Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ваш@gmail.com'; // Замените на вашу почту Gmail
    $mail->Password = 'ваш_пароль'; // Замените на пароль от вашей почты Gmail
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    try {
        $mail->CharSet = 'UTF-8';
        $mail->setLanguage('ru', 'phpmailer/language/');
        $mail->isHTML(true);

        $mail->setFrom('ваш@gmail.com', 'Ну короче'); // Замените на вашу почту Gmail
        $mail->addAddress($_POST['forEmail']); // Замените на адрес, на который вы хотите отправить письмо
        $mail->Subject = 'Hi bro';

        $body = '<h1>Встречайте супер письмо!</h1>';

        if (trim(!empty($_POST['forName']))) {
            $body .= '<p><strong>Имя:</strong> ' . $_POST['forName'] . '</p>';
        }

        if (trim(!empty($_POST['forNumber']))) {
            $body .= '<p><strong>Номер телефона:</strong> ' . $_POST['forNumber'] . '</p>';
        }

        $mail->Body = $body;

        $mail->send();
        $message = 'Данные отправлены!';
    } catch (Exception $e) {
        $message = 'Ошибка при отправке формы: ' . $mail->ErrorInfo;
    }

    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
?>
