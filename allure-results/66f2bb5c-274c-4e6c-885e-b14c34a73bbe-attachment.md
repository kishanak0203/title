# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> first book can be added to the cart
- Location: tests\pom.spec.js:4:5

# Error details

```
Error: page.$$: selector: expected string, got object
```

# Page snapshot

```yaml
- generic [active] [ref=f20e1]:
  - paragraph [ref=f20e3]:
    - link "PMP Practice" [ref=f20e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Get Certified" [ref=f20e5] [cursor=pointer]
  - banner [ref=f20e10]:
    - navigation "Main navigation" [ref=f20e11]:
      - link "SUT" [ref=f20e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f20e13]'
        - text: Practice
      - generic [ref=f20e14]:
        - list [ref=f20e15]:
          - listitem [ref=f20e16]:
            - button "Demos" [ref=f20e17] [cursor=pointer]
          - listitem [ref=f20e18]:
            - link "Tools" [ref=f20e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f20e20]:
            - link "Tips" [ref=f20e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f20e22]:
            - link "Test Cases" [ref=f20e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f20e24]:
            - link "API Testing" [ref=f20e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f20e26]:
            - link "About" [ref=f20e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f20e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f20e29]:
    - generic [ref=f20e32]:
      - insertion:
        - iframe [ref=f20e34]
    - paragraph [ref=f20e36]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f20e37] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f20e38]:
      - insertion [ref=f20e40]:
        - generic [ref=f20e43]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f20e45]: Discover more
          - link "Try Dev Tools" [ref=f20e46] [cursor=pointer]
          - link "Try Cloud Tools" [ref=f20e51] [cursor=pointer]
          - link "Read Bestsellers" [ref=f20e56] [cursor=pointer]
          - link "Books" [ref=f20e61] [cursor=pointer]
          - link "Source Robotics" [ref=f20e66] [cursor=pointer]
          - link "Launch a Store" [ref=f20e71] [cursor=pointer]
          - link "E-commerce" [ref=f20e76] [cursor=pointer]
          - link "Learn to Code" [ref=f20e81] [cursor=pointer]
      - generic [ref=f20e88]:
        - navigation "breadcrumb mb-2" [ref=f20e89]:
          - list [ref=f20e90]:
            - listitem [ref=f20e91]:
              - link "Home" [ref=f20e92] [cursor=pointer]:
                - /url: /
            - listitem [ref=f20e93]:
              - text: /
              - link "E-commerce Bookstore Practice Automation" [ref=f20e94] [cursor=pointer]:
                - /url: /bookstore
        - navigation [ref=f20e95]:
          - generic [ref=f20e96]:
            - link "All Books" [ref=f20e97] [cursor=pointer]:
              - /url: /bookstore
            - link "Cart" [ref=f20e98] [cursor=pointer]:
              - /url: /bookstore/cart
              - img "Cart" [ref=f20e99]
            - button "kishan" [ref=f20e103] [cursor=pointer]
        - heading "Books List" [level=1] [ref=f20e105]
        - generic [ref=f20e108]:
          - textbox "Enter keywords..." [ref=f20e109]
          - button "Search" [ref=f20e110] [cursor=pointer]
        - generic [ref=f20e111]:
          - generic [ref=f20e112]:
            - heading "Category" [level=3] [ref=f20e114]
            - list [ref=f20e115]:
              - listitem [ref=f20e116]:
                - link "All" [ref=f20e117] [cursor=pointer]:
                  - /url: /bookstore/
              - listitem [ref=f20e118]:
                - link:
                  - /url: /bookstore/books/categories/674106645b85ae33d4d10e62
              - listitem [ref=f20e119]:
                - link:
                  - /url: /bookstore/books/categories/674106705b85ae33d4d10e68
              - listitem [ref=f20e120]:
                - link:
                  - /url: /bookstore/books/categories/6741066a5b85ae33d4d10e65
          - generic [ref=f20e121]:
            - generic [ref=f20e122]:
              - generic [ref=f20e123]:
                - text: Sort by
                - link "Prep for Tests" [ref=f20e124] [cursor=pointer]
              - link "New" [ref=f20e128] [cursor=pointer]:
                - /url: "?sort=new_book"
              - generic [ref=f20e129] [cursor=pointer]: Price
            - generic [ref=f20e131]:
              - generic [ref=f20e133]:
                - link [ref=f20e134] [cursor=pointer]:
                  - /url: /bookstore/books/674108466cb6226060a20d44
                  - img "JavaScript for Web Developers" [ref=f20e135]
                - generic [ref=f20e136]:
                  - link [ref=f20e137] [cursor=pointer]:
                    - /url: /bookstore/books/674108466cb6226060a20d44
                    - heading "JavaScript for Web Developers" [level=5] [ref=f20e138]
                  - paragraph [ref=f20e139]: 40€
                  - link "Add To Cart" [ref=f20e140] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/674108466cb6226060a20d44
              - generic [ref=f20e142]:
                - link [ref=f20e143] [cursor=pointer]:
                  - /url: /bookstore/books/67410b8c6cb6226060a20da4
                  - img "The DevOps Handbook" [ref=f20e144]
                - generic [ref=f20e145]:
                  - link [ref=f20e146] [cursor=pointer]:
                    - /url: /bookstore/books/67410b8c6cb6226060a20da4
                    - heading "The DevOps Handbook" [level=5] [ref=f20e147]
                  - paragraph [ref=f20e148]: 30€
                  - link "Add To Cart" [ref=f20e149] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/67410b8c6cb6226060a20da4
              - generic [ref=f20e151]:
                - link [ref=f20e152] [cursor=pointer]:
                  - /url: /bookstore/books/67410a586cb6226060a20d8d
                  - img "Agile Testing" [ref=f20e153]
                - generic [ref=f20e154]:
                  - link [ref=f20e155] [cursor=pointer]:
                    - /url: /bookstore/books/67410a586cb6226060a20d8d
                    - heading "Agile Testing" [level=5] [ref=f20e156]
                  - paragraph [ref=f20e157]: 56€
                  - link "Add To Cart" [ref=f20e158] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/67410a586cb6226060a20d8d
              - generic [ref=f20e160]:
                - link [ref=f20e161] [cursor=pointer]:
                  - /url: /bookstore/books/69bdfc1a3e70d20294efa4fe
                  - img "XSS_TEST_\"><script>alert(document.domain)</script>" [ref=f20e162]
                - generic [ref=f20e163]:
                  - link [ref=f20e164] [cursor=pointer]:
                    - /url: /bookstore/books/69bdfc1a3e70d20294efa4fe
                    - heading "XSS_TEST_\"><script>alert(document.domain)</script>" [level=5] [ref=f20e165]
                  - paragraph [ref=f20e166]: 10€
                  - link "Add To Cart" [ref=f20e167] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/69bdfc1a3e70d20294efa4fe
              - generic [ref=f20e169]:
                - link [ref=f20e170] [cursor=pointer]:
                  - /url: /bookstore/books/69bdfc3e3e70d20294efa507
                  - img "SIMPLE_TITLE" [ref=f20e171]
                - generic [ref=f20e172]:
                  - link [ref=f20e173] [cursor=pointer]:
                    - /url: /bookstore/books/69bdfc3e3e70d20294efa507
                    - heading "SIMPLE_TITLE" [level=5] [ref=f20e174]
                  - paragraph [ref=f20e175]: 10€
                  - link "Add To Cart" [ref=f20e176] [cursor=pointer]:
                    - /url: /bookstore/add-to-cart/69bdfc3e3e70d20294efa507
            - list [ref=f20e180]:
              - listitem [ref=f20e181]:
                - link "First":
                  - /url: "?page=1"
              - listitem [ref=f20e182]:
                - link "prev":
                  - /url: "?page=1"
              - listitem [ref=f20e183]:
                - link "1" [ref=f20e184] [cursor=pointer]:
                  - /url: "?page=1"
              - listitem [ref=f20e185]:
                - link "Next":
                  - /url: "?page=1"
              - listitem [ref=f20e186]:
                - link "Last":
                  - /url: "?page=1"
      - insertion [ref=f20e188]:
        - generic [ref=f20e191]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f20e193]: Discover more
          - link "Read Economics" [ref=f20e194] [cursor=pointer]
          - link "Train Managers" [ref=f20e199] [cursor=pointer]
          - link "Hire PM Experts" [ref=f20e204] [cursor=pointer]
          - link "Automation practice website" [ref=f20e209] [cursor=pointer]
          - link "Software Testing courses" [ref=f20e214] [cursor=pointer]
          - link "Automation testing tools" [ref=f20e219] [cursor=pointer]
          - link "QA certification training" [ref=f20e224] [cursor=pointer]
          - link "API testing tools" [ref=f20e229] [cursor=pointer]
  - insertion [ref=f20e235]:
    - iframe [ref=f20e237]
  - contentinfo [ref=f20e238]:
    - generic [ref=f20e243]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f20e244]
      - paragraph [ref=f20e245]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f20e246] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f20e247] [cursor=pointer]
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
  22 |   async allProductText() {
  23 |     let text=[];
  24 |     for(let i=0;i<5;i++){
  25 |       const allproduct=await this.productTitles.nth(i).textContent()
  26 |       text.push(allproduct);
  27 |     }
  28 |     return text;
  29 |   }
  30 |   async addFirstProductToCart(name) {
> 31 |     const productfetch= await this.page.$$(this.productTitles)
     |                                         ^ Error: page.$$: selector: expected string, got object
  32 |     for(const product of productfetch){
  33 |       if(name=== await product.textContent()){
  34 |         await product.click()
  35 |         break;
  36 |       }
  37 |     }
  38 |   }
  39 |     async cart() {
  40 |     // await this.productTitles.first().click();
  41 |     await this.addToCartButton.click();
  42 |   }
  43 |   async openCart() {
  44 |     await this.cartLink.click();
  45 |   }
  46 | 
  47 |   async getCartProductText() {
  48 |     return (await this.cartProductName.first().textContent());
  49 |   }
  50 | }
  51 | 
```