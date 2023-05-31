function enviarCorreo(){

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var telefono = $("#telefono").val();
    var correo = $("#correo").val();
    var comentarios = $("#comentarios").val();

    console.log(nombre, apellido,telefono, correo, comentarios);

    $.ajax(
        {
            url: "enviarCorreo.php",
            method: "post",
            data: {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                correo: correo,
                comentarios: comentarios
            },
            success: function(response){
                alert(response);
            },
            error: function(){
                alert("error");
            }
        }
    )

    // var xhr = new XMLHttpRequest();
    // var url = "enviarCorreo.php";
    // var correoFormato = "nombre:" + document.getElementById("nombre").value 
    //                     + "apellido:" + document.getElementById("apellido").value
    //                     + "telefono:" + document.getElementById("telefono").value
    //                     + "correo_electronico:" + document.getElementById("correo").value
    //                     + "comentarios:" + document.getElementById("comentarios").value;
    
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urleconded");
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         alert(xhr.responseText);
    //     }
    // }

    // xhr.send(correoFormato);
}