import { useCart } from '../context/CartContext';

function ShoppinPage(){
  const { cartItems } = useCart();
  return(
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
  ))}
</div>
  )
}

export default ShoppinPage