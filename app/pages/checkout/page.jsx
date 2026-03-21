'use client'

import { useSelector } from 'react-redux'

export default function Checkout() {
  const boughtItems = useSelector(state => state.cart.boughtItems)

  return (
    <div className='bg-red-500 p-4 text-white'>
      <h1>Checkout - Dine Køb</h1>

      {boughtItems.length === 0 ? (
        <p>Du har ikke købt noget endnu</p>
      ) : (
        <div>
          {boughtItems.map((purchase, index) => (
            <div key={index}>
              <h2>Køb #{index + 1}</h2>
              <p>Dato: {purchase.timestamp}</p>
              
              <h3>Varer:</h3>
              {purchase.items.map((item) => (
                <div key={item.idDrink}>
                  <p>{item.strDrink} x{item.quantity} = ${item.price * item.quantity}</p>
                </div>
              ))}
              
              <h3>Total: ${purchase.total}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}