import { test, expect } from '@playwright/test';
import { BookstorePage } from '../pages/BookstorePage.js';

test('first book can be added to the cart', async ({ page }) => {
  const bookstore = new BookstorePage(page);
  await bookstore.signIn('kishanmasfj@gmail.com', 'kishan0203');

  const allProductText = await bookstore.allProductText();
  console.log('all product: ' + allProductText);

  await bookstore.addFirstProductToCart('JavaScript for Web Developers');
  await bookstore.cart();
  await bookstore.openCart();

  const cartProductText = await bookstore.getCartProductText();
  expect(allProductText).toContain(cartProductText);
});
