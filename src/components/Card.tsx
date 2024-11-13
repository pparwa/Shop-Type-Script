import React, { useContext } from 'react'
import { AiOutlineStar,AiFillStar } from 'react-icons/ai'
import { CartContext } from '../context/cartContext'
import { Product } from '../Types.docs'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const Card = ({product}:{product:Product}) => {
    const {addItem} = useContext(CartContext)
    const navigate = useNavigate()
  return (
    <div className="card">
          <img
            src={`${product.image}`}
            alt=""
          />
          <main>
            <p>{product.title}</p>
            <div className="card-details">
              <div>
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
                <AiOutlineStar style={{ color: "orange" }} />
              </div>
              <p>{product.price}</p>
            </div>
            <button onClick={()=>{
                addItem(product.id)
                swal({icon:"success" ,title:"محصول با موفقیب به سبد خرید افزوده شد",buttons:["اوکی" ,"رفتن به سبد خرید"]}).then(result=>{
                navigate('/cart')
                })
            }}>Add to Basket</button>
          </main>
        </div>
  )
}

export default Card