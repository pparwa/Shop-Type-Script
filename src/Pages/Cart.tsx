import React, { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../context/cartContext";
import Card from "../components/Card";
export default function Cart() {
  const {basket} = useContext(CartContext)
  return (
    <>
      {basket.length ? ( 
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {basket.map(basket=>(
              <Card  product={basket}/>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
