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
                id: new Date().toString(), // um valor único. poderia ser de outra forma, desde que garanta ser único.
                nome: action.dadosContato.nome, // dadosContato está definido em contatos-actions (onde poderia ser payload)
                telefone: action.dadosContato.telefone
            }
            
            return { // Substitui o break
                // ... significa que serão retornados todos os itens do array. operador spread 
                contatos: [contato, ...estado.contatos] // no primeiro caso retorna apenas o novo. depois são retornados todos mais o novo
            }
        default: // Devolve o estado sem nenhuma alteração
            return estado
    }
}