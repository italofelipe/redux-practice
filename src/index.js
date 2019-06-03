import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import App from './components/App'

// Passo 4 - Chamar { Provider } do react-redux e createStore do Redux
ReactDOM.render(
// Passo 05 - Cercar a instância do App Component com o Provider, do react-redux
<Provider store={createStore(reducers)}>
<App />

</Provider>,
document.querySelector('#root')

)

/*
Nota: Cercar o <App /> com <Provider> faz-se necessário
para que o Redux "distribua" os elementos do State entre 
os componentes.
*/