import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// React é um pacote de todos os clientes, é o coração
// React-dom é o document object module 
// É a representação do html em forma de javascript //


//Dentro de ReactDOM, ele está recebendo o elemento de root, que é o elemento raiz da nossa pasta dentro de index.html //
//Basicamente o html vai ser gerado pelo javascript de root, deixando o site single page aplication(SPA) mais rápido. //
//O elemento render está trazendo algo interno do react, no caso renderizando e mostrando em dela a aplicação App.jsx //

