async function countCartPrice(pool) {

    const queryCountCartPrice = `
    SELECT SUM(price * product_quantity) FROM product.product  INNER JOIN cart_product.cart_product ON product.product.id_product = cart_product.cart_product.id_product`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(queryCountCartPrice)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } 
}

module.exports =  countCartPrice;