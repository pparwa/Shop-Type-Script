import React, { ReactNode, useEffect, useState, createContext } from "react";
import { Product, Basket } from "../Types.docs";

type CartContextType = {
  products: Product[];
  basket: Basket[];
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
};

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [basket, setBasket] = useState<Basket[]>([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) =>setProducts(data));
  }, []);

  const addItem = (id: number) => {
    const item = basket.find((pro) => pro.id === id);
    if (item) {
      const newBasket = basket.map((pro) =>
        pro.id === id ? { ...pro, count: pro.count + 1 } : pro
      );
      setBasket(newBasket);
    } else {
      const newItem = products.find((pro) => pro.id === id);
      if (newItem) {
        setBasket([...basket, { ...newItem, count: 1 }]);
      }
    }
  };

  const removeItem = (id: number) => {
    const newBasket = basket.filter((pro) => pro.id !== id);
    setBasket(newBasket);
  };

  return (
    <CartContext.Provider value={{ products , basket , addItem , removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
