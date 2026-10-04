import {
createContext,
useContext,
useState
}
from "react";


const CartContext=createContext();



export function CartProvider({children}){


const [cart,setCart]=useState([]);


const [wishlist,setWishlist]=useState([]);



return(

<CartContext.Provider

value={{

cart,
setCart,

wishlist,
setWishlist,

cartCount:cart.length,

wishlistCount:wishlist.length

}}

>


{children}


</CartContext.Provider>


)

}



export function useCart(){

return useContext(CartContext);

}