export const ADD_LUGAR = 'ADD_LUGAR' // Constante que tem como finalidade evitar erros possíveis ao usar uma String 

/**
 * Função criadora de ação
 * 
 * @param {*} nomeLugar 
 * @param {*} imagem 
 * @returns Uma ação
 */
export const addLugar = (nomeLugar, imagem) => {
    return {
        type: ADD_LUGAR,
        dadosLugar: {
            nomeLugar: nomeLugar, // Poderia ser utilizada a abreviação
            imagem: imagem
        }
    }
}