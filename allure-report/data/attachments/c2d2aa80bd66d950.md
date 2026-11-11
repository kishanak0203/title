# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> first book can be added to the cart
- Location: tests\pom.spec.js:4:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.card-title') resolved to 5 elements:
    1) <h5 class="card-title ms-1" data-testid="title-674108466cb6226060a20d44">JavaScript for Web Developers</h5> aka locator('a').filter({ hasText: 'JavaScript for Web Developers' })
    2) <h5 class="card-title ms-1" data-testid="title-67410b8c6cb6226060a20da4">The DevOps Handbook</h5> aka locator('a').filter({ hasText: 'The DevOps Handbook' })
    3) <h5 class="card-title ms-1" data-testid="title-67410a586cb6226060a20d8d">Agile Testing</h5> aka locator('a').filter({ hasText: 'Agile Testing' })
    4) <h5 class="card-title ms-1" data-testid="title-69bdfc1a3e70d20294efa4fe">XSS_TEST_"><script>alert(document.domain)</script></h5> aka locator('a').filter({ hasText: 'XSS_TEST_"><script>alert(' })
    5) <h5 class="card-title ms-1" data-testid="title-69bdfc3e3e70d20294efa507">SIMPLE_TITLE</h5> aka locator('a').filter({ hasText: 'SIMPLE_TITLE' })

Call log:
  - waiting for locator('.card-title')

```

# Page snapshot

```yaml
- generic [active] [ref=f23e1]:
  - paragraph [ref=f23e3]:
    - link "PMP Practice" [ref=f23e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - banner [ref=f23e6]:
    - navigation "Main navigation" [ref=f23e7]:
      - link "SUT" [ref=f23e8] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f23e9]'
        - text: Practice
      - generic [ref=f23e10]:
        - list [ref=f23e11]:
          - listitem [ref=f23e12]:
            - button "Demos" [ref=f23e13] [cursor=pointer]
          - listitem [ref=f23e14]:
            - link "Tools" [ref=f23e15] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f23e16]:
            - link "Tips" [ref=f23e17] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f23e18]:
            - link "Test Cases" [ref=f23e19] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f23e20]:
            - link "API Testing" [ref=f23e21] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f23e22]:
            - link "About" [ref=f23e23] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f23e24] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f23e25]:
    - insertion [ref=f23e29]:
      - iframe [ref=f23e31]
    - paragraph [ref=f23e33]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f23e34] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f23e35]:
      - insertion [ref=f23e37]:
        - iframe [ref=f23e39]
      - generic [ref=f23e42]:
        - navigation "breadcrumb mb-2" [ref=f23e43]:
          - list [ref=f23e44]:
            - listitem [ref=f23e45]:
              - link "Home" [ref=f23e46] [cursor=pointer]:
                - /url: /
            - listitem [ref=f23e47]:
              - text: /
              - link "E-commerce Bookstore Practice Automation" [ref=f23e48] [cursor=pointer]:
                - /url: /bookstore
        - navigation [ref=f23e49]:
          - generic [ref=f23e50]:
            - link "All Books" [ref=f23e51] [cursor=pointer]:
              - /url: /bookstore
            - link "Cart" [ref=f23e52] [cursor=pointer]:
              - /url: /bookstore/cart
              - img "Cart" [ref=f23e53]
            - button "kishan" [ref=f23e57] [cursor=pointer]
        - heading "Books List" [level=1] [ref=f23e59]
        - generic [ref=f23e62]:
          - textbox "Enter keywords..." [ref=f23e63]
          - button "Search" [ref=f23e64] [cursor=pointer]
        - generic [ref=f23e65]:
          - generic [ref=f23e66]:
            - heading "Category" [level=3] [ref=f23e68]
            - list [ref=f23e69]:
              - listitem [ref=f23e70]:
                - link "All" [ref=f23e71] [cursor=pointer]:
                  - /url: /bookstore/
              - listitem [ref=f23e72]:
                - link:
                  - /url: /bookstore/books/categories/674106645b85ae33d4d10e62
              - listitem [ref=f23e73]:
                - link:
                  - /url: /bookstore/books/categories/674106705b85ae33d4d10e68
              - listitem [ref=f23e74]:
                - link:
                  - /url: /bookstore/books/categories/6741066a5b85ae33d4d10e65
          - generic [ref=f23e75]:
            - generic [ref=f23e76]:
              - generic [ref=f23e77]: Sort by
              - link "New" [ref=f23e78] [cursor=pointer]:
                - /url: "?sort=new_book"
              - generic [ref=f23e79] [cursor=pointer]: Price
            - generic [ref=f23e81]:
              - generic [ref=f23e83]:
                - link [ref=f23e84] [cursor=pointer]:
                  - /url: /bookstore/books/674108466cb6226060a20d44
                  - img "JavaScript for Web Developers" [ref=f23e85]
                - generic [ref=f23e86]:
                  - link [ref=f23e87] [cursor=pointer]:
                    - /url: /bookstore/books/674108466cb6226060a20d44
                    - heading "JavaScript for Web Developers" [level=5] [ref=f23e88]
                  - paragraph [ref=f23e89]: 40€
                  - link "Add To Cart" [ref=f23e90] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/674108466cb6226060a20d44
              - generic [ref=f23e92]:
                - link [ref=f23e93] [cursor=pointer]:
                  - /url: /bookstore/books/67410b8c6cb6226060a20da4
                  - img "The DevOps Handbook" [ref=f23e94]
                - generic [ref=f23e95]:
                  - link [ref=f23e96] [cursor=pointer]:
                    - /url: /bookstore/books/67410b8c6cb6226060a20da4
                    - heading "The DevOps Handbook" [level=5] [ref=f23e97]
                  - paragraph [ref=f23e98]: 30€
                  - link "Add To Cart" [ref=f23e99] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/67410b8c6cb6226060a20da4
              - generic [ref=f23e101]:
                - link [ref=f23e102] [cursor=pointer]:
                  - /url: /bookstore/books/67410a586cb6226060a20d8d
                  - img "Agile Testing" [ref=f23e103]
                - generic [ref=f23e104]:
                  - link [ref=f23e105] [cursor=pointer]:
                    - /url: /bookstore/books/67410a586cb6226060a20d8d
                    - heading "Agile Testing" [level=5] [ref=f23e106]
                  - paragraph [ref=f23e107]: 56€
                  - link "Add To Cart" [ref=f23e108] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/67410a586cb6226060a20d8d
              - generic [ref=f23e110]:
                - link [ref=f23e111] [cursor=pointer]:
                  - /url: /bookstore/books/69bdfc1a3e70d20294efa4fe
                  - img "XSS_TEST_\"><script>alert(document.domain)</script>" [ref=f23e112]
                - generic [ref=f23e113]:
                  - link [ref=f23e114] [cursor=pointer]:
                    - /url: /bookstore/books/69bdfc1a3e70d20294efa4fe
                    - heading "XSS_TEST_\"><script>alert(document.domain)</script>" [level=5] [ref=f23e115]
                  - paragraph [ref=f23e116]: 10€
                  - link "Add To Cart" [ref=f23e117] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/69bdfc1a3e70d20294efa4fe
              - generic [ref=f23e119]:
                - link [ref=f23e120] [cursor=pointer]:
                  - /url: /bookstore/books/69bdfc3e3e70d20294efa507
                  - img "SIMPLE_TITLE" [ref=f23e121]
                - generic [ref=f23e122]:
                  - link [ref=f23e123] [cursor=pointer]:
                    - /url: /bookstore/books/69bdfc3e3e70d20294efa507
                    - heading "SIMPLE_TITLE" [level=5] [ref=f23e124]
                  - paragraph [ref=f23e125]: 10€
                  - link "Add To Cart" [ref=f23e126] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/69bdfc3e3e70d20294efa507
            - list [ref=f23e130]:
              - listitem [ref=f23e131]:
                - link "First":
                  - /url: "?page=1"
              - listitem [ref=f23e132]:
                - link "prev":
                  - /url: "?page=1"
              - listitem [ref=f23e133]:
                - link "1" [ref=f23e134] [cursor=pointer]:
                  - /url: "?page=1"
              - listitem [ref=f23e135]:
                - link "Next":
                  - /url: "?page=1"
              - listitem [ref=f23e136]:
                - link "Last":
                  - /url: "?page=1"
      - insertion [ref=f23e138]:
        - generic [ref=f23e141]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f23e143]: Discover more
          - link "Try Cloud Tools" [ref=f23e144] [cursor=pointer]
          - link "Try Dev Tools" [ref=f23e149] [cursor=pointer]
          - link "Read Bestsellers" [ref=f23e154] [cursor=pointer]
          - link "Books" [ref=f23e159] [cursor=pointer]
          - link "Source Robotics" [ref=f23e164] [cursor=pointer]
          - link "Launch a Store" [ref=f23e169] [cursor=pointer]
          - link "E-commerce" [ref=f23e174] [cursor=pointer]
          - link "Learn to Code" [ref=f23e179] [cursor=pointer]
  - contentinfo [ref=f23e184]:
    - generic [ref=f23e189]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f23e190]
      - paragraph [ref=f23e191]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f23e192] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f23e193] [cursor=pointer]
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
  8  |     this.productTitles = page.locator('.card-title');
  9  |     this.addToCartButton = page.locator('.btn.btn-danger');
  10 |     this.cartLink = page.locator('a').filter({ has: page.locator('img[alt="Cart"]') });
  11 |     this.cartProductName = page.locator(
  12 |       '//table[contains(@class, "table")]/tbody/tr/td[2]'
  13 |     );
  14 |   }
  15 |   async signIn(email, password) {
  16 |     await this.page.goto('https://practice.expandtesting.com/bookstore/user/signin');
  17 |     await this.emailInput.fill(email);
  18 |     await this.passwordInput.fill(password);
  19 |     await this.submitButton.click();
  20 |     await this.allBooksLink.click();
  21 |   }
  22 |   async getFirstProductText() {
> 23 |     return (await this.productTitles.textContent());
     |                                      ^ Error: locator.textContent: Error: strict mode violation: locator('.card-title') resolved to 5 elements:
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