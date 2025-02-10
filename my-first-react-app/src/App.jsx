import { useState } from 'react'
import './App.css'


const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (

    <div className='card'>
      <h2>Movie:- {title}</h2>
      <button className='like-btn' onClick={() => { setHasLiked(!hasLiked) }}>{hasLiked ? 'Liked' : 'Like'}</button>
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
