function enviarCorreo(){
    let datos = {
        nombre: $('#nombre').val(),
        apellido: $('#apellido').val(),
        telefono: $('#telefono').val(),
        correo: $('#correo').val(),
        mensaje: $('#comentarios').val()
    }
    $.ajax({
        method: 'POST',
        url: 'https://prod-14.westus2.logic.azure.com:443/workflows/68a8a4b5c2d8476487dc6a2e7fe4eedf/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SWzOdAryYvzEHLyoPpKYk0YyBEd1_KZJrK6gqJWnQQ4',
        contentType: 'application/json',
        data: JSON.stringify(datos),
        success: () => {
            Swal.fire('Enviado', 'success')
        }
    });
}