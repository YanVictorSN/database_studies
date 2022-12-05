async function listClientAsc(pool) {

    const querylistClientAsc = `
    SELECT 
      id_class, 
      name, 
      cpf, 
      address, 
      phone_number 
    FROM users.users 
    WHERE id_class 
    LIKE 'client' 
    ORDER BY name ASC;`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querylistClientAsc)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } finally {
      client.release()
    }
}

module.exports = listClientAsc;