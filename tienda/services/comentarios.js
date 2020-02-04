const Comentarios = [

    {
        id:1,
        autor: 1,
        cuerpo: "Lorem fistrum a peich a peich a wan la caidita pecador. Hasta luego Lucas no te digo trigo por no llamarte Rodrigor quietooor ahorarr pupita hasta luego Lucas benemeritaar. Ahorarr pecador apetecan ahorarr sexuarl fistro pupita. La caidita sexuarl por la gloria de mi madre hasta luego Lucas ahorarr diodeno apetecan no puedor ahorarr. Quietooor condemor llevame al sircoo jarl papaar papaar hasta luego Lucas caballo blanco caballo negroorl se calle ustée a wan.",
        fecha_publicacion: Date.parse("25/01/2017")
    },
    {
        id:2,
        autor: 3,
        cuerpo: "Hasta luego Lucas no te digo trigo por no llamarte Rodrigor quietooor ahorarr pupita hasta luego Lucas benemeritaar. Ahorarr pecador apetecan ahorarr sexuarl fistro pupita. La caidita sexuarl por la gloria de mi madre hasta luego Lucas ahorarr diodeno apetecan no puedor ahorarr. Quietooor condemor llevame al sircoo jarl papaar papaar hasta luego Lucas caballo blanco caballo negroorl se calle ustée a wan.",
        fecha_publicacion: Date.parse("26/03/2018")
    },
    {
        id:3,
        autor: 2,
        cuerpo: "Ahorarr pecador apetecan ahorarr sexuarl fistro pupita. La caidita sexuarl por la gloria de mi madre hasta luego Lucas ahorarr diodeno apetecan no puedor ahorarr. Quietooor condemor llevame al sircoo jarl papaar papaar hasta luego Lucas caballo blanco caballo negroorl se calle ustée a wan.",
        fecha_publicacion: Date.parse("06/11/2019")
    }
]

module.exports.findById = (id) =>{
    let resultado;
    Comentarios.forEach(comentario =>{
        if (comentario.id == id){
            resultado = comentario;
        }
    });
    return resultado;
};
