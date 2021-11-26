import React from 'react';
import container from './navegacao/ContatosNavigator';
import { createStore, combineReducers } from 'redux' // Ficar atento que tudo isto é do Redux
import { Provider } from 'react-redux';
import contatosReducer from './store/contatos-reducer';

/**
 *
 * contatos é o nome da fatia de estado a ser manipulado
 * contatosReducer função que manipula a fatia de estado
 * 
 * Ao disparar uma ação como determinar qual reducer será executado? Não há essa triagem. Todos os reducers recebem a ação e cada reducer decide sobre qual ação operar
 */
const rootReducer = combineReducers({
  contatos: contatosReducer,
})

/**
 * O store contém state, dispatch, etc 
 * 
 */
const store = createStore(rootReducer);

export default function App() {
  /* Englobar no componente Provider para fazer a integração entre Redux e React. Assim é entregue o store pros componentes */
  return <Provider store={store}> 
    {container}
  </Provider>
}

