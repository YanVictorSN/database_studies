async function updateProduct(name,category,brand,price,quantity,id,pool) {

    const queryUpdateProductById = `
    UPDATE product.product 
    SET 
      product_name=$1, 
      category=$2, 
      brand=$3, 
      price=$4, 
      quantity=$5 
    WHERE 
    id_product=$6;`
    
    const values = [name,category,brand,price,quantity,id];
  
    const client = await pool.connect()

    try {
      if(name == "") throw "Por favor, insira um nome válido!"
      if(id == "") throw "Por favor, insira um ID válido!"
      const res = await client.query(queryUpdateProductById)
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      client.release()
    }
}

module.exports = updateProduct;