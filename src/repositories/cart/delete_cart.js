async function deleteCart(id,pool) {

    const querydeleteCartById = `
    DELETE FROM 
      cart.cart
    WHERE id_cart='${id}' 
    RETURNING *;`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querydeleteCartById)
      console.table(res.rows);
    } catch (err) {
      console.log(err.stack)
    }
}

module.exports = deleteCart;