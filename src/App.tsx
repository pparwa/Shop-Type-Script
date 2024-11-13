import { CartContext, CartProvider } from "./context/cartContext";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import { useContext } from "react";
function App() {
  const router = useRoutes(routes)
  
  return (
  <CartProvider>
    <div className="app">
    
<Header />

{router}
     

   

      <footer>
        <a target={"_blank"} href="https://sabzlearn.ir">
          Sabzlearn.ir
        </a>
      </footer>
    </div>
  </CartProvider>
  );
}

export default App;
