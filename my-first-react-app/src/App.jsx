import { useEffect, useState } from 'react'
import './App.css'


const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);

  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);



  return (

    <div className='card' onClick={() => { setCount((prevState) => prevState + 1) }}>
      <h2>Movie:- {title} <br></br> - {count || null}</h2>
      <button className='like-btn' onClick={() => { setHasLiked(!hasLiked) }}>{hasLiked ? '❤' : '👍'}</button>
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
