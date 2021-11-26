import React from 'react';
import container from './navegacao/ContatosNavigator';
import { createStore, combineReducers } from 'redux' 
import { Provider } from 'react-redux';
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
})

const store = createStore(rootReducer);

export default function App() {
  
  return <Provider store={store}> 
    {container}
  </Provider>
}

