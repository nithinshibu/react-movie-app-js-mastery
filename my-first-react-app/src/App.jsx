import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({ title }) => {

  return (

    <div className='card' style={{ border: '1px solid #4b5353', padding: '20px', margin: '10px', backgroundColor: '#31363f' }}>
      <h2>Movie:- {title}</h2>
    </div >

  );

}

const App = () => {

  return (
    <div className="card-container">
      <Card title="Star Wars" ></Card>
      <Card title="John Wick" ></Card>
      <Card title="Harry Potter" ></Card>
    </div>

  );

}



export default App
