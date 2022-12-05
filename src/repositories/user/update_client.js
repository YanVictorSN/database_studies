async function updateClient(name,cpf,address,phone_number,id,pool) {

    const queryUpdateClientById = `
    UPDATE users.users 
    SET 
      name='${name}', 
      cpf='${cpf}', 
      address='${address}', 
      phone_number='${phone_number}' 
    WHERE id_user='${id}' 
    RETURNING *;`
  
    const client = await pool.connect()

    try {
      if(name == "") throw "Por favor, insira um nome válido!"
      if(id == "") throw "Por favor, insira um ID válido!"
      const res = await client.query(queryUpdateClientById)
      console.table(res);
    } catch (error) {
      console.log(error);
    } finally {
      client.release()
    }
}

module.exports = updateClient;