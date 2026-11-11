# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> first book can be added to the cart
- Location: tests\pom.spec.js:4:5

# Error details

```
Error: page.$$: Execution context was destroyed, most likely because of a navigation
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://practice.expandtesting.com/bookstore/user/signin", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - banner [ref=e6]:
    - navigation "Main navigation" [ref=e7]:
      - link "SUT" [ref=e8] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e9]'
        - text: Practice
      - generic [ref=e10]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - button "Demos" [ref=e13] [cursor=pointer]
          - listitem [ref=e14]:
            - link "Tools" [ref=e15] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e16]:
            - link "Tips" [ref=e17] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e18]:
            - link "Test Cases" [ref=e19] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e20]:
            - link "API Testing" [ref=e21] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e22]:
            - link "About" [ref=e23] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e24] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e25]:
    - insertion [ref=e29]:
      - iframe [ref=e31]
    - paragraph [ref=e33]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e34] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e35]:
      - insertion [ref=e37]:
        - iframe [ref=e39]
      - generic [ref=e42]:
        - navigation "breadcrumb mb-2" [ref=e43]:
          - list [ref=e44]:
            - listitem [ref=e45]:
              - link "Home" [ref=e46] [cursor=pointer]:
                - /url: /
            - listitem [ref=e47]:
              - text: /
              - link "E-commerce Bookstore Practice Automation" [ref=e48] [cursor=pointer]:
                - /url: /bookstore
        - navigation [ref=e49]:
          - generic [ref=e50]:
            - link "All Books" [ref=e51] [cursor=pointer]:
              - /url: /bookstore
            - link "Cart" [ref=e52] [cursor=pointer]:
              - /url: /bookstore/cart
              - img "Cart" [ref=e53]
            - link "Sign In" [ref=e56] [cursor=pointer]:
              - /url: /bookstore/user/signin
        - heading "Sign in" [level=1] [ref=e57]
        - generic [ref=e58]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - generic [ref=e62]: Email
              - textbox "Email" [ref=e63]:
                - /placeholder: Enter your email...
            - generic [ref=e64]:
              - generic [ref=e65]: Password
              - textbox "Password" [ref=e66]:
                - /placeholder: Enter your password...
            - button "Sign In" [ref=e67] [cursor=pointer]
          - paragraph [ref=e69]:
            - text: Haven't had account ?
            - link "Sign Up!" [ref=e70] [cursor=pointer]:
              - /url: /bookstore/user/signup
      - insertion [ref=e72]:
        - iframe [ref=e74]
  - contentinfo [ref=e75]:
    - generic [ref=e80]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e81]
      - paragraph [ref=e82]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e83] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e84] [cursor=pointer]
```

# Test source

```ts
  1  | export class BookstorePage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.emailInput = page.locator('#email');
  5  |     this.passwordInput = page.locator('#password');
  6  |     this.submitButton = page.locator('[type="submit"]');
  7  |     this.allBooksLink = page.getByRole('link', { name: 'All Books' });
  8  |     this.productTitles = page.$$('.card-title');
  9  |     this.addToCartButton = page.locator('.btn.btn-danger');
  10 |     this.cartLink = page.locator('a').filter({ has: page.locator('img[alt="Cart"]') });
  11 |     this.cartProductName = page.locator(
  12 |       '//table[contains(@class, "table")]/tbody/tr/td[2]'
  13 |     );
  14 |   }
  15 |   async signIn(email, password) {
> 16 |     await this.page.goto('https://practice.expandtesting.com/bookstore/user/signin');
     |                     ^ Error: page.goto: Test ended.
  17 |     await this.emailInput.fill(email);
  18 |     await this.passwordInput.fill(password);
  19 |     await this.submitButton.click();
  20 |     await this.allBooksLink.click();
  21 |   }
  22 |   async getFirstProductText() {
  23 |     return (await this.productTitles.textContent());
  24 |   }
  25 |   async addFirstProductToCart(name) {
  26 |     await this.productTitles.first().click();
  27 |     await this.addToCartButton.click();
  28 |   }
  29 |   async openCart() {
  30 |     await this.cartLink.click();
  31 |   }
  32 | 
  33 |   async getCartProductText() {
  34 |     return (await this.cartProductName.first().textContent());
  35 |   }
  36 | }
  37 | 
```