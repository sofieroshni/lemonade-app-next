'use client'
import styles from '../ui/Footer.module.css' 
import { useDispatch, useSelector } from "react-redux"
import { buyLemon, sellLemonade } from "../redux/LemonadeSlice"
import CartList from "../components/CartList"  
export default function Footer(){
  const dispatch = useDispatch()
  const cash = useSelector(state => state.lemonade.cash)
  const profit = useSelector(state => state.lemonade.revenue - state.lemonade.cost) 

  return(
    <footer className={styles.footer}>
      <div className={styles.divwrapper}>
      </div>

      <div className={styles.buttons}> 
        <button  onClick={() => dispatch(buyLemon())}>
         Køb citron
        </button>          
        <button onClick={() => dispatch(sellLemonade())}>
       Sælg Citron
        </button>
      </div>
      <div>

      </div>
      <CartList></CartList>
      <div>
        
      </div>
<div>

          <p className={styles.p}>Cash: {cash}</p>
      <p className={styles.p}>Profit: {profit}</p>
</div>

    </footer>
  )
}