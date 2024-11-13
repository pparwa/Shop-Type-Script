
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
const Header = () => {
  const {basket} = useContext(CartContext)
  console.log(basket)
  return (
     <header>
        <a className="logo" href="#">
          Sabzlearn Shop
        </a>
        <Link to="/cart">
          Basket
          <span>{basket.length}</span>
        </Link>
      </header>
  )
}

export default Header