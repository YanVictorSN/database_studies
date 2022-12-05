async function deleteProduct(id,pool) {

    const querydeleteProductById = `
    DELETE FROM 
      product.product 
    WHERE id_product='${id}' 
    RETURNING *;`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querydeleteProductById)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    }
}

module.exports = deleteProduct;