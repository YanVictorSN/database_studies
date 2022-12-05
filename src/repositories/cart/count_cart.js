async function countCart(pool) {

    const queryCountCart = `
    SELECT SUM(product_quantity) FROM cart_product.cart_product`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(queryCountCart)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } 
}

module.exports = countCart;