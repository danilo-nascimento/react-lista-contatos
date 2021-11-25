# Apostila 8

O Redux e React Native são independentes

Uma aplicação JavaScript pode usar Redux

Os componentes são interessados em um estado centralizado. Pode atualizar um estado ou apenas ler e representar graficamente. Logo, eles precisam ter acesso aos estados centralizados.

O Redux é composto por cinco estados: criação, ação, dispatch, reducer e state

O React não se encaixa em nenhum dos estados. Apenas irão utilizá-los

O dispatch (atualiza o estado) dispara uma ação especial para comunicar ao React que o estado foi atualizado e assim todos os interessados serem notificados gerando um novo ciclo de renderização.

Cada Reducer opera sobre uma fatia de um estado centralizado

Adicionaremos um middleware entre a ação e o reducer (destino): Redux Thunk recebe a ação e função dispatch, executa operações assíncronas que após concluídas executam o dispatch.

Carga útil: payload

## Instalações

npm i redux

npm i react-redux

npm i redux-thunk