async function deleteClient(pool,id) {

    const querydeleteClientById = `
    DELETE FROM 
      users.users 
    WHERE id_user='${id}' 
    RETURNING *;`
  
    const client = await pool.connect()
    
    try {
      const res = await client.query(querydeleteClientById)
      console.table(res.rows);
    } catch (err) {
      console.log(err.stack)
    } finally {
      client.release()
    }
}

module.exports = deleteClient;