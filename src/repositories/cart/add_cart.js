async function addCart(id_users,id_product,pool) {

    const genUiid = uuidv4();

    const queryAddCart = `
    INSERT INTO 
    cart.cart 
      (id_cart,
      id_users,
      id_product) 
    VALUES($1, $2, $3) RETURNING *`
  
    const valuesAddCart = [genUiid,id_users,id_product]

    try {
    
      const res = await pool.query(queryAddCart, valuesAddCart)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } 
}

  module.exports = addCart;