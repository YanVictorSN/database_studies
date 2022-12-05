async function addOrder(id_orders,id_cart,status_order,form_of_payment,total, pool) {

    const genUiid = uuidv4();

    const client = await pool.connect()

    const queryAddOrder = `
    INSERT INTO orders.orders 
      (id_orders,
      status_order, 
      form_of_payment,
      paymant_portion, 
      total, 
      creation_date_order) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`

    const queryAddCartProduct = `
    INSERT INTO orders.orders 
      (id_cart) 
    VALUES($1) RETURNING *`
  
    const valuesAddOrder = [genUiid,id_cart,status_order, form_of_payment,total, now()]

    const valuesCartProduct = [id_cart]

    try {
      await client.query(`BEGIN;`)
      await client.query(valuesAddOrder)
      const res = await client.query( queryAddOrder, valuesAddOrder,queryAddCartProduct, valuesCartProduct )
      
      await client.query(`COMMIT;`)

      console.table(res.rows);
       return [res.rows, err = null] 

    } catch (err) {
    
      await client.query('ROLLBACK;')
      console.log(err)
    } finally {
      client.release()
    }
}

  module.exports = addOrder;