import Contato from "../modelo/Contato"; // Classe modelo para utilizar na criação do objeto lugar que será adicionado ao estados lugares
import { ADD_CONTATO } from "./contatos-actions"

const estadoInicial = {
    contatos: []
}

/**
 * @param {Array} estadoInicial - Na primeira invocação ele virá como undefined e os próximos virão com estados
 * @param {Object} action - Função que manipula o estado
 */
export default (estado = estadoInicial, action) => {
    console.log('estado',estado)
    console.log('action',action)
    switch (action.type){
        case ADD_CONTATO: // Executa apenas neste tipo de ação
            console.log('action.dadosContato',action.dadosContato)
            const contato = new Contato(new Date().toString(), action.dadosContato.nome, action.dadosContato.telefone)
            
            return { // Substitui o break
                contatos: [contato, ...estado.contatos]
            }
        default: // Devolve o estado sem nenhuma alteração
            return estado
    }
}