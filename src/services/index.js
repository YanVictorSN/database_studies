require("dotenv").config();

const { Pool } = require('pg');

const updateProduct = require("../repositories/product/update_product");

const insertProduct = require("../repositories/product/insert_product");

const listOrderAsc = require("../repositories/product/list_order_asc");

const listOrderDesc = require("../repositories/product/list_order_des");

const deleteProduct = require("../repositories/product/delete_product");

const insertClient = require("../repositories/user/insert_client");

const updateClient = require("../repositories/user/update_client");

const listClientAsc = require("../repositories/user/list_client");

const deleteClient = require("../repositories/user/delete_client");

const deleteAdmin = require("../repositories/admin/delete_admin");

const insertAdmin = require("../repositories/admin/insert_admin");

const updateAdmin = require("../repositories/admin/update_admin");

const listAdminAsc = require("../repositories/admin/list_admin");

const addCart = require("../repositories/cart/add_cart");

const countCart = require("../repositories/cart/count_cart");

const countPriceCart = require("../repositories/cart/count_price_cart");

const deleteCart = require("../repositories/cart/delete_cart");

const listCart = require("../repositories/cart/list_cart");

const addOrder = require("../repositories/order/order_cart")

const pool = new Pool({
    user: process.env.USER_POSTGRESQL,
    host: process.env.HOST_POSTGRESQL,
    database: process.env.DB_POSTGRESQL,
    password: process.env.PASSWORD_POSTGRESQL,
    port: process.env.PORT_POSTGRESQL,
});

//Funções Produtos:

updateProduct();
insertProduct();
listOrderAsc();
listOrderDesc();
deleteProduct();

//Funções Cliente

insertClient();
updateClient();
listClientAsc();
deleteClient();

//Funções Administrador
deleteAdmin();
insertAdmin();
updateAdmin();
listAdminAsc();

//Funções Carrinho
addCart();
deleteCart();
listCart();
countCart();
countPriceCart();

//Função Pedido
addOrder()