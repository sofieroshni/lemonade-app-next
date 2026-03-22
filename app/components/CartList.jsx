'use client'

import { useSelector } from "react-redux"  
import CartItem from "../components/CartItem"
import styles from "../ui/CartList.module.css"  // ✅ CSS import

export default function CartList() {
  const cartItems = useSelector(state => state.cart.cartItems)

  if (cartItems.length === 0) {
    return <p className={styles.p}></p>
  }

  return (
    <div className={styles.div}>
      <p className={styles.p}>Din Kurv: ({cartItems.length} lemonader)</p>
      {/* {cartItems.map(item => (
        <CartItem key={item.idDrink} item={item} />
      ))} */}
    </div>
  )
}