import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import Card from '../components/Card'
const Home = () => {
  const {products} = useContext(CartContext)  
  return (
    <>
     <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        {products.map((pro)=>(<Card product={pro} key={pro.id}/>))}
      </main>
    
    </>
   
  )
}

export default Home