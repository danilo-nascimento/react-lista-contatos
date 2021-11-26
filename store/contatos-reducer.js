import { ADD_CONTATO } from "./contatos-actions"

const estadoInicial = {
    contatos: []
}

/**
 * @param {Array} estadoInicial - Na primeira invocação ele virá como undefined e os próximos virão com estados
 * @param {Object} action - Função que manipula o estado
 */
export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO: // Executa apenas neste tipo de ação
            const contato = {
                id: new Date().toString(),
                nome: action.dadosContato.nome,
                telefone: action.dadosContato.telefone
            }
            
            return { // Substitui o break
                contatos: [contato, ...estado.contatos]
            }
        default: // Devolve o estado sem nenhuma alteração
            return estado
    }
}