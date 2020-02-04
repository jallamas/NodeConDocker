const Clientes = [
    {
        id:1,
        email : "pablito@clavounclavito.es",
        nombre : "Pablo Durán Ramírez",
        password : "12345"
    },
    {
        id:2,
        email : "pedro@noclavounclavito.es",
        nombre : "Pedro Álvarez Pérez",
        password : "23456"
    },
    {
        id:3,
        email : "marcos@noclavonadena.es",
        nombre : "Marcos Márquez Marcas",
        password : "34567"
    }
]

module.exports.findById = (id) =>{
    let resultado;
    Clientes.forEach(cliente =>{
        if (cliente.id == id){
            resultado = cliente;
        }
    });
    return resultado;
};