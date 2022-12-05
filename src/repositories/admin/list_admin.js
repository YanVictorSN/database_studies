async function listAdminAsc(pool) {

    const querylistAdminAsc = `
    SELECT 
      id_class, 
      name, 
      cpf, 
      address, 
      phone_number 
    FROM users.users 
    WHERE id_class LIKE 'admin' 
    ORDER BY name ASC;`
  
    try {
      const res = await pool.query(querylistAdminAsc)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    
    
    }
}

module.exports = listAdminAsc;