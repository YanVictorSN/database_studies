async function updateAdmin(name,cpf,address,phone_number,id,pool) {

    const queryUpdateClientById = `
      UPDATE users.users 
      SET 
        name=$1, 
        cpf=$2, 
        address=$3, 
        phone_number=$4 
      WHERE id_user=$5 RETURNING *;`

    const values = [name,cpf,address,phone_number,id];

    const client = await pool.connect()

    try {
      if(name == "") throw "Por favor, insira um nome válido!"
      if(id == "") throw "Por favor, insira um ID válido!"
      const res = await client.query(queryUpdateClientById)
      console.table(res.rows);
    } catch (error) {
      console.log(error);
    } 
}

module.exports = updateAdmin;