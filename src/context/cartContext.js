import { useState } from "react"
import { createContext } from "react"

const cartContext = createContext()

function CartProvider({children}) {
  const [cart, setCart] = useState(new Map())  

  const addItem = (item, quantity)  => {
    console.log("fddfdfd")
    let currentQuantity = cart.get(item.id)?.quantity ?? 0;
    setCart(new Map([
      ...cart, 
      [item.id, {...item, quantity: currentQuantity + quantity}]
    ]))    
  }

  const removeItem = (item) => {
    cart.delete(item.id)
    setCart(new Map(cart))    
  }

  const clearItems = () => setCart(new Map())

  return <>
    <cartContext.Provider value={{cart, addItem, removeItem, clearItems}} >
      {children}
    </cartContext.Provider>
  </>

}
export {
  cartContext,
  CartProvider
}