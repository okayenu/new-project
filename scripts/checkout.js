import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

async function loadPage() {
  try {
    await Promise.all([
      loadProductsFetch(),
      new Promise((resolve, reject) => {
        loadCart(() => resolve());
      })
    ]);
  } catch (error) {
    console.error('Failed to load page data. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();
