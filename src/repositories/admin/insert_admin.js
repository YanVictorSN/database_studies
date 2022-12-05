const { v4: uuidv4 } = require('uuid');

async function insertAdmin(name,id_class,cpf,address,phone_number,pool) {

    const genUiid = uuidv4();

    const queryInsertAdmin = `
    INSERT INTO 
    users.users 
      (id_user,
      id_class,
      name,
      cpf,
      address,
      phone_number) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`
  
    const valuesInsertAdmin = [genUiid,id_class,name,cpf,address,phone_number]
    

    try {
    
        if(!cpf.length == 11) throw "Por favor, insira um CPF válido."
        if(!phone_number.length == 9) throw "Por favor, insira um número válido."

      const res = await pool.query(queryInsertAdmin, valuesInsertAdmin)
      console.table(res.rows);
    } catch (err) {
      console.log(err)
    } 
}

  module.exports = insertAdmin;