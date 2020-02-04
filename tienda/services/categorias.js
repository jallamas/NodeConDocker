const Categorias = [
    {
       id:1,
        nombre : "Lácteos",
        categoria_padre : null
    },
    {
        id:2,
        nombre : "Embutidos",
        categoria_padre : null
    },
    {
        id:3,
        nombre : "Yogourt",
        categoria_padre : 1
    },
]

module.exports.findById = (id) =>{
    let resultado;
    Categorias.forEach(categoria =>{
        if (categoria.id == id){
            resultado = categoria;
        }
    });
    return resultado;
};