// 'use client'

// import { useDispatch, useSelector } from 'react-redux'
// import { removeItem, updateQuantity, buyAll } from '../../redux/cartSlice'

// export default function Cart() {
//   const dispatch = useDispatch()
//   const cartItems = useSelector(state => state.cart.cartItems)
//   const cash = useSelector(state => state.lemonade.cash)

//   const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

//   return (
//     <div>
//       <h1>Cart Page</h1>

//       {cartItems.length === 0 ? (
//         <p>Din kurv er tom</p>
//       ) : (
//         <div>
//           <h2>Din Kurv ({cartItems.length} items)</h2>

//           {cartItems.map((item) => (
//             <div key={item.idDrink}>
//               <h3>{item.strDrink}</h3>
//               <p>Pris: ${item.price || 'N/A'}</p>
//               <p>Mængde: {item.quantity}</p>

//               <input 
//                 type="number" 
//                 value={item.quantity}
//                 onChange={(e) => dispatch(updateQuantity({
//                   idDrink: item.idDrink,
//                   quantity: parseInt(e.target.value)
//                 }))}
//               />

//               <button onClick={() => dispatch(removeItem(item.idDrink))}>
//                 Fjern
//               </button>

//               <p>Subtotal: ${(item.price || 0) * item.quantity}</p>
//             </div>
//           ))}

//           <h2>Total: ${totalPrice}</h2>
//           <p>Din Cash: ${cash}</p>

//           <button onClick={() => dispatch(buyAll())}>
//             Køb Alt
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
'use client'

import CartPageContent from '../../components/CartPagContent'

export default function Cart() {
  return (
    <div>
      <h1>Din Kurv</h1>
      <CartPageContent />
    </div>
  )
}