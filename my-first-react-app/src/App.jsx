import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({ title, isCool, actors, rating }) => {

  return (

    <div>
      <h2>Movie:- {title} with rating = {rating} and actor = {actors[0].name}</h2>
      {console.log(actors)}
    </div>

  );

}

const App = () => {

  return (
    <>
      <h2>Movies</h2>
      <Card title="Star Wars" rating={5} isCool={true} actors={[{ name: 'Actor Name' }]}></Card>
      <Card title="John Wick" rating={5} isCool={true} actors={[{ name: 'Actor Name' }]}></Card>
      <Card title="Harry Potter" rating={5} isCool={true} actors={[{ name: 'Actor Name' }]}></Card>
    </>

  );

}



export default App
