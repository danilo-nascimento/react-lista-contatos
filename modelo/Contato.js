/**
 *
 * @param {String} id - Poderia ser UUID ou contador. Apenas precisa ser único
 * @param {String} nome
 * @param {String} telefone
 */
class Contato {
  constructor(id, nome, telefone) {
    this.id = id;
    this.nome = nome
    this.telefone = telefone
  }
}

export default Contato