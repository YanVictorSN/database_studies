async function deleteAdmin(pool,id) {

    const querydeleteAdminById = `
    DELETE FROM 
      users.users 
    WHERE id_user='${id}' 
    RETURNING *;`
  
    
    try {
      const res = await pool.query(querydeleteAdminById)
      console.table(res.rows);
      
    } catch (err) {
      console.log(err)
    } finally {
      
    }
}

module.exports = deleteAdmin;