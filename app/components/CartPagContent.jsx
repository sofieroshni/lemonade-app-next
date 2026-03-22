// denne side er for den komponent der vises i bunden af min shoopping side + selve linket Kurv(0) 
// den anden 
'use client'

import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity, buyAll } from '../redux/cartSlice'
import styles from '../ui/Shop.module.css'

export default function CartPageContent() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)
  const cash = useSelector(state => state.lemonade.cash)

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

  if (cartItems.length === 0) {
    return <p>Din kurv er tom</p>
  }

  return (
    <div className={styles.wrapper}>
      {cartItems.map((item) => (
        <div className={styles.div} key={item.idDrink}>
          <div>
            <h3 className={styles.h3}>{item.strDrink}</h3>
            <p className={styles.p}>{item.price} kr</p>
            <p className={styles.p}>Mængde: {item.quantity}</p>

            <button 
              className={styles.button}
              onClick={() => dispatch(updateQuantity({
                idDrink: item.idDrink,
                quantity: item.quantity + 1
              }))}
            >
              +
            </button>

            <button 
              className={styles.button}
              onClick={() => dispatch(updateQuantity({
                idDrink: item.idDrink,
                quantity: item.quantity - 1
              }))}
            >
              -
            </button>

            <button 
              className={styles.button}
              onClick={() => dispatch(removeItem(item.idDrink))}
            >
              Fjern
            </button>

            <p className={styles.p}>Subtotal: {(item.price || 0) * item.quantity} kr</p>
          </div>
        </div>
      ))}
<div className={styles.kobalt}>
    

      <h3>Total: {totalPrice} kr</h3>
      <p>Din Cash: {cash} kr</p>
         <button className={styles.button} onClick={() => dispatch(buyAll())}>
        Køb Alt
      </button>
      </div>
    </div>
  )
}