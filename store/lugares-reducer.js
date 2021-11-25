import Lugar from "../modelo/Lugar"; // Classe modelo para utilizar na criação do objeto lugar que será adicionado ao estados lugares
import { ADD_LUGAR } from "./lugares-actions"

const estadoInicial = {
    lugares: []
}

/**
 * @param {Array} estadoInicial - Na primeira invocação ele virá como undefined e os próximos virão com estados
 * @param {Object} action - Função que manipula o estado
 */
export default (estado = estadoInicial, action) => {
    console.log(estado)
    console.log(action)
    switch (action.type){
        case ADD_LUGAR: // Executa apenas neste tipo de ação
            const lugar = new Lugar (new Date().toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagem)
            
            return { // Substitui o break
                lugares: [lugar, ...estado.lugares]
            }
        default: // Devolve o estado sem nenhuma alteração
            return estado
    }
}