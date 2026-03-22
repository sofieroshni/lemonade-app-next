import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../redux/cartSlice"

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price} kr</p>
      <p>Antal: {item.quantity}</p>
      <p>Total: {item.price * item.quantity} kr</p>
      
      <button onClick={() => dispatch(updateQuantity({idDrink: item.idDrink, quantity: item.quantity + 1}))}>+</button>
      <button onClick={() => dispatch(updateQuantity({idDrink: item.idDrink, quantity: item.quantity - 1}))}>-</button>
      <button onClick={() => dispatch(removeItem(item.idDrink))}>Fjern</button>
    </div>
  )
}