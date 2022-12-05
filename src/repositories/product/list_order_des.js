async function listOrderDesc(pool) {

    const querylistOrderDesc = `
    SELECT 
      product_name, 
      category, 
      brand, 
      price 
    FROM product.product 
    ORDER BY price DESC;`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querylistOrderDesc)
      console.table(res.rows);
      return null
    } catch (err) {
      console.log(err)
    } finally {
      client.release()
    }
}

module.exports = listOrderDesc;