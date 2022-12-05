async function listOrderAsc(pool) {

    const querylistOrderAsc = `
    SELECT 
      product_name, 
      category, 
      brand, 
      price 
    FROM product.product 
    ORDER BY price ASC;`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querylistOrderAsc)
      console.log(res);
    } catch (err) {
      console.log(err.stack)
    } finally {
      client.release()
    }
}

module.exports = listOrderAsc;