import { ADD_CONTATO } from "./contatos-actions"

const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO: 
            const contato = {
                id: new Date().toString(),
                nome: action.dadosContato.nome,
                telefone: action.dadosContato.telefone
            }
            
            return { 
                contatos: [contato, ...estado.contatos]
            }
        default: 
            return estado
    }
}