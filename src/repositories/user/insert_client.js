const { v4: uuidv4 } = require('uuid');

async function insertClient(name,id_class,cpf,address,phone_number,pool) {

    const genUiid = uuidv4();

    const queryInsertClient = `
    INSERT INTO 
    users.users 
      (id_user,
      id_class,
      name,
      cpf,
      address,
      phone_number) 
    VALUES($1, $2, $3, $4, $5, $6) 
    RETURNING *`
  
    const valuesInsertClient = [genUiid,id_class,name,cpf,address,phone_number]
    
    const client = await pool.connect();

    try {
    
        if(!cpf.length == 11) throw "Por favor, insira um CPF válido."
        if(!phone_number.length == 9) throw "Por favor, insira um número válido."

      const res = await client.query(queryInsertClient, valuesInsertClient)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } finally {
      client.release()
    }
}

  module.exports = insertClient;