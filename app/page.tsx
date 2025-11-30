import React from 'react'
import Hello from '../components/Hello';

const Home = () => {
console.log('What type of component am I?');
  
  return (
    <main>
      <div className='text-5xl underline'>Welcome to NextJs</div>
      <Hello />
    </main>
  )
}

export default Home