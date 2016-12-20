'use strict';
const store = require('../store.js');
const showAllProductsTemplate = require('../templates/product-thumb.handlebars');

const showOneProductTemplate = require('../templates/products.handlebars');

const getAllProductsSuccess = function(data) {
  store.products = data.products;
  console.log(data);
   $('#all-products').html(showAllProductsTemplate(data));

};

const getAllProductsFailure = function() {

};

const getOneProductSuccess = function(data) {
  console.log('Yay data', data);
   $('#one-product').html(showOneProductTemplate(data));
   return data;
};

const getOneProductFailure = function() {
console.log('FAIL!');
};

const addItemSuccess = function(data) {
  console.log('Item in cart', data);
  //  $('').html((data));
   return data;
};

const addItemFailure = function() {
console.log('FAIL!');
};

module.exports = {
  getAllProductsSuccess,
  getAllProductsFailure,
  getOneProductSuccess,
  getOneProductFailure,
  addItemSuccess,
  addItemFailure,
};
