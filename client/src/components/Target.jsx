function Target ({product}){
return (
  <>
    <h2>{product.name}</h2>
    <img src={product.image} alt="" />
    <h2>{product.price}</h2>
  </>
)
}

export default Target