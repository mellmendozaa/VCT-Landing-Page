<?php

    $to = "mell_mell18@outlook.com"; //corre electronico de la empresa 
    $from = $_POST['correo'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $comentario = $_POST['comentario'];
    $asunto = "Informacion a nuevo cliente PAGINA WEB";

    $mensaje = "NUEVO CLIENTE QUISIERA MAS INFORMACION" . "\n\n" . 
                $nombre . " " . $apellido . "\n\n" .
                "Telefono: " . $telefono . "\n\n" .
                "Correo Electronico: " . $from . "\n\n" . 
                "Comentarios : " . $comentario;
    
    $headers = "From:" . $from;
    
    $result = mail($to,$asunto,$mensaje,$headers);

    if($result){
        echo "Mail Sent. Thank you " . $nombre . ", we will contact you shortly.";
    } else{
        echo "Mensaje no enviado";
    }
    
?>