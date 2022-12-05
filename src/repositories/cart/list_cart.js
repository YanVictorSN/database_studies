async function listCart(pool) {

    const querylistCart = `
    SELECT 
      id_cart, 
      id_users, 
      id_product
    FROM cart.cart`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querylistCart)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } 
}

module.exports = listCart;