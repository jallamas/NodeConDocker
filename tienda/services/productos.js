const Productos = [
    {
        id:1,
        nombre : "Queso El Cigarral",
        descripcion : "Queso manchego semicurado en cuñas.",
        precio_actual : 4.50,
        fecha_publicacion : new Date(),
        stock : 25,
        categoria : 1,
        comentarios : [1]
    },
    {
        id:2,
        nombre : "Yogourt Danone Limón",
        descripcion : "Yogourt sabor limón",
        precio_actual : 1.5,
        fecha_publicacion : new Date(),
        stock : 25,
        categoria : 3,
        comentarios : [2,3]
    },
    {
        id:3,
        nombre : "Fuet Casa Tarradellas",
        descripcion : "Salchichón del finito catalán",
        precio_actual : 3.60,
        fecha_publicacion : Date.parse("06/11/2019"),
        stock : 22,
        categoria : 2,
        comentarios : []
    }
]

module.exports.findAll= () =>{
    return Productos;
};

module.exports.findById = (id) =>{
    let resultado;
    Productos.forEach(producto =>{
        if (producto.id == id){
            resultado = producto;
        }
    });
    return resultado;
};