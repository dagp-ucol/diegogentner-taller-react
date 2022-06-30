import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";

const App = () => {

  const now = new Date();
  const a = 10;
  const b = 20;
  const myList = [
    'Primero',
    'Segundo'
  ]

  return (
    
  <div>
      <Header title="Adele es la mejor" />
      <List items = {myList}/>
      <p>It is Now {now.toString()}</p>
      <p style={{color: a >= 10 ? "red" : "blue"}}>a + b is {a + b}</p>
  </div>
  )
}

const HelloWorld = (props) => {
  return (
    <div> 
      <h1>{props.title}</h1>
    </div>
  )
}

const List = ({items}) => ( //si utilizo parentesis es directamente
  <ul>
    {items.map(item => {
      return (
        <li>{item}</li>
      )
    })}
  </ul>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
