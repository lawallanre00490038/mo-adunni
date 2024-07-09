"use client";

import React, { useState, createContext, useContext, ReactNode } from 'react';
import { toast } from 'react-hot-toast';
import { SanityDocument } from '@sanity/client';



// This needs to be edited later
type Product = SanityDocument;


interface ContextProps {
  showCart: boolean;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
}

const initialState: ContextProps = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  incQty: () => {},
  decQty: () => {},
  onAdd: () => {},
};

const Context = createContext<ContextProps>(initialState);

type StateContextProps = {
  children: ReactNode;
};

export const StateContext = ({ children }: StateContextProps) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    if (checkProductInCart) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${quantity} ${product.name} added to cart`);
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);