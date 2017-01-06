'use strict';

const authEvents = require('../scripts/auth/events.js');

const productEvents = require('../scripts/product-cart/events.js');

// const cartEvents = require('../scripts/cart/cart_events.js');
const stripeEvents = require('../scripts/stripe/stripe-events.js');

const signInPrompt = require('./templates/sign-in-prompt.handlebars');

// animations for stuff
const gearScroll = require('./animations/gears.js');
// const sr = require('./animations/scroll-reveal.js');



$(()=>{
  authEvents.addHandlers();
  productEvents.addCartHandlers();
  productEvents.onGetAllProducts();
  stripeEvents.addHandlers();

  $('#prompt-target').html(signInPrompt);
  $('body').addClass('no-scroll');

  $('.signed-in').hide();

  gearScroll.gearScroll();
  gearScroll.browser_transform();

  $('.sign-in').val('yo@yo.com');
  $('.sign-in').val('yo');


});
