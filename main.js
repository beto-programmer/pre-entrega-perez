function solicitarCuenta(){
    let correo = String(prompt("Ingrese su correo electronico para crear su cuenta"))
    let contraseña = String(prompt("ahora ingrese su contraseña"))
    console.log (correo)
    console.log (contraseña)
    alert ("Listo!, su cuenta ya ha sido creada")
}

function solicitarMercaderia(){
    let mercaderia = prompt("¿Que quiere llevar? Caramelos, chocolate, papas fritas, barras proteicas, creatina")
    let mercaderiaCantidad = Number(prompt("Genial! ¿Cuanto quiere llevar?"))
    if (mercaderiaCantidad >= 50) {
        alert ("Lo siento :(, no tenemos tanta cantidad de ese producto. Si se equivocó o quiere comprar otra cosa recarga la pagina")
    }
    let costoMercaderia = mercaderiaCantidad * 50
    alert("Perfecto! serian $" + costoMercaderia)
}
function metodoPago(){
    alert ("¿Que metodo de pago prefiere?")
    let metodoPago = prompt("Efectivo, credito o debito")
}
solicitarCuenta();
solicitarMercaderia();
metodoPago();

