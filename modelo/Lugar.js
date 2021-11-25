class Lugar {
    /**
     * 
     * @param {String} id - Poderia ser UUID ou contador. Apenas precisa ser único
     * @param {*} titulo 
     * @param {*} imagemURI 
     */
    constructor (id, titulo, imagemURI){
        this.id = id
        this.titulo = titulo
        this.imagemURI = imagemURI
    }
}

export default Lugar