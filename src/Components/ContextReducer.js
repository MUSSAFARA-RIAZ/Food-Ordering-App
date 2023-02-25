import React, { createContext, useContext, useReducer } from 'react';
const cartContext=createContext();
const dispatchcontext=createContext();
const reducer=(state,action)=>{

}

export default function CartProvider({children}) {
 const [state,dispatch]=useReducer(reducer,[]);

  return (
    <cartContext.Provider value={dispatch}>
     <dispatchcontext.Provider value={state}>
      {children}
     </dispatchcontext.Provider>
    </cartContext.Provider>
  )
}
export const useCart=()=>useContext(cartContext);
export const Usedispatchcart=()=>useContext(dispatchcontext);
