let respuestaWhile
let respuestaDoWhile
let codigo
let acumularTotalGastado = 0
let productoBuscado
let cantidad = 0

let productos = [
    { id: 0, nombre: "remera", precio: 5000, categoria: "ropa", stock: 10 },
    { id: 1, nombre: "short", precio: 4500, categoria: "ropa", stock: 10 },
    { id: 2, nombre: "pelota", precio: 3400, categoria: "deportes", stock: 10 },
    { id: 3, nombre: "celular Samsung A53", precio: 100000, categoria: "celulares", stock: 10 },
    { id: 4, nombre: "celular Samsung A52", precio: 120000, categoria: "celulares", stock: 10 },
    { id: 5, nombre: "gorra", precio: 2500, categoria: "ropa", stock: 10 }
  ]

  respuestaWhile = menu()

  while(respuestaWhile != 5){
    switch (respuestaWhile) {
        case 1: do{
                    codigo = Number(prompt("Ingrese el codigo del producto que quiere comprar:\n0-remera $5000\n1-Short $4500\n2-Pelota $3400\n3-celular Samsung A53 $100000\n4-celular Samsung A52 $120000\n5-Gorra $2500\n6-Salir\n"))
                    cantidad = Number(prompt("Ingrese la cantidad que quiere:"))
                
                    if(codigo >= 0 && codigo < 6){
                        if(productos[codigo].stock >= cantidad){
                            for(let i=0; i<productos.length; i++){
                                if(productos[i].id == codigo){
                                    acumularTotalGastado += (productos[i].precio * cantidad)
                                    productos[i].stock -= cantidad
                                }
                                
                            }
                        }
                        else{
                            alert("No hay stock suficiente\n" + "Stock disponible: " + productos[codigo].stock)
                        }
                       
                    }
                    else{
                        alert("Codigo de producto invalido")
                    }

                    respuestaDoWhile = prompt("Quiere realizar otra compra si / no").toLowerCase()
        }while(respuestaDoWhile == "si")
            
            break
        case 2:
                informar(acumularTotalGastado)
            break
        case 3:
                for(i=0; i<productos.length; i++){
                    alert(productos[i].nombre +" : "+ productos[i].stock)
                }
            break
        case 4:
                productoBuscado = prompt("Ingrese el nombre del producto que busca").toLowerCase()
            
               let x = productos.find(elemento => {
                    return elemento.nombre === productoBuscado
                })

                if(x != undefined){
                    alert("El producto esta en la lista")
                }
                else{
                    alert("El producto no esta en la lista")
                }
            break    
        default:
            break
    }

    respuestaWhile = menu()
  }


  function menu() {
    let respuesta
    respuesta = Number(prompt("Ingrese el numero de la opcion que quiera:\n 1-Realizar compras\n 2-Calcular e informar monto gastado\n 3-Informar stock de los productos\n 4-Averiguar si un producto se encuentra en la lista\n 5-Salir\n"))
    return respuesta
  }

  function informar(monto) {
    alert("El monto gastado hasta el momento es de: " + monto)
  }