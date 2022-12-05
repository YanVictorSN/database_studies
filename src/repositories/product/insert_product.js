const { v4: uuidv4 } = require('uuid');

async function insertProduct(name,category,brand,price,quantity,pool) {

    const genUiid = uuidv4();

    const queryInsertProduct = `
    INSERT INTO 
    product.product 
      (id_product,
      product_name,
      category,
      brand,
      price,
      quantity) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`
  
    const valuesInsertProduct = [genUiid,name,category,brand,price,quantity]
  
    
    try {
      const res = await pool.query(querylistOrderAsc)
      console.log(res);
    } catch (err) {
      console.log(err.stack)
    }

    pool
    .query(queryInsertProduct, valuesInsertProduct)
    .then(res => {
      console.log(res.rows)
    })
    .catch(e => console.error(e.stack))
  }

  module.exports = insertProduct;