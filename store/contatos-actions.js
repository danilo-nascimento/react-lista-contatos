export const ADD_CONTATO = 'ADD_CONTATO' // Constante que tem como finalidade evitar erros possíveis ao usar uma String 

/**
 * Função criadora de ação
 * 
 * @param {*} nome 
 * @param {*} telefone 
 * @returns Uma ação
 */
export const addContato = (nome, telefone) => {
    return {
        type: ADD_CONTATO, // Obrigatório
        dadosContato: { // Poderia ser outro nome (payload ou cargaUtil)
            nome: nome, // Poderia ser utilizada a abreviação
            telefone: telefone
        }
    }
}