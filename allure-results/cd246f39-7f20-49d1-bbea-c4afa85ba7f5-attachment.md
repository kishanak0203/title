# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> first book can be added to the cart
- Location: tests\pom.spec.js:4:5

# Error details

```
TypeError: expect(JavaScript for Web Developers).toContain(JavaScript for Web Developers,The DevOps Handbook,Agile Testing,XSS_TEST_"><script>alert(document.domain)</script>,SIMPLE_TITLE) // indexOf

Matcher error: expected value must be a string if received value is a string

Expected has type:  array
Expected has value: ["JavaScript for Web Developers", "The DevOps Handbook", "Agile Testing", "XSS_TEST_\"><script>alert(document.domain)</script>", "SIMPLE_TITLE"]
Received has type:  string
Received has value: "JavaScript for Web Developers"
```

# Page snapshot

```yaml
- generic [active] [ref=f40e1]:
  - paragraph [ref=f40e3]:
    - link "PMP Practice" [ref=f40e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Get Certified" [ref=f40e5] [cursor=pointer]
  - banner [ref=f40e10]:
    - navigation "Main navigation" [ref=f40e11]:
      - link "SUT" [ref=f40e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f40e13]'
        - text: Practice
      - generic [ref=f40e14]:
        - list [ref=f40e15]:
          - listitem [ref=f40e16]:
            - button "Demos" [ref=f40e17] [cursor=pointer]
          - listitem [ref=f40e18]:
            - link "Tools" [ref=f40e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f40e20]:
            - link "Tips" [ref=f40e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f40e22]:
            - link "Test Cases" [ref=f40e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f40e24]:
            - link "API Testing" [ref=f40e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f40e26]:
            - link "About" [ref=f40e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f40e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f40e29]:
    - generic [ref=f40e32]:
      - insertion:
        - iframe [ref=f40e34]
    - paragraph [ref=f40e36]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f40e37] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f40e38]:
      - insertion [ref=f40e40]:
        - generic [ref=f40e43]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f40e45]: Discover more
          - link "Learn to Code" [ref=f40e46] [cursor=pointer]
          - link "Source Robotics" [ref=f40e51] [cursor=pointer]
          - link "Try Dev Tools" [ref=f40e56] [cursor=pointer]
          - link "Try Cloud Tools" [ref=f40e61] [cursor=pointer]
          - link "Unlock Discounts" [ref=f40e66] [cursor=pointer]
          - link "Shopping Cart" [ref=f40e71] [cursor=pointer]
          - link "Commercial Shopping Carts" [ref=f40e76] [cursor=pointer]
          - link "Compare Cars" [ref=f40e81] [cursor=pointer]
      - generic [ref=f40e88]:
        - navigation "breadcrumb mb-2" [ref=f40e89]:
          - list [ref=f40e90]:
            - listitem [ref=f40e91]:
              - link "Home" [ref=f40e92] [cursor=pointer]:
                - /url: /
            - listitem [ref=f40e93]:
              - text: /
              - link "E-commerce Bookstore Practice Automation" [ref=f40e94] [cursor=pointer]:
                - /url: /bookstore
        - navigation [ref=f40e95]:
          - generic [ref=f40e96]:
            - link "All Books" [ref=f40e97] [cursor=pointer]:
              - /url: /bookstore
            - link "Cart 1" [ref=f40e98] [cursor=pointer]:
              - /url: /bookstore/cart
              - img "Cart" [ref=f40e99]
              - generic [ref=f40e100]: "1"
            - button "kishan" [ref=f40e103] [cursor=pointer]
        - heading "Shopping Cart" [level=1] [ref=f40e105]
        - generic [ref=f40e106]:
          - table [ref=f40e108]:
            - rowgroup [ref=f40e109]:
              - row [ref=f40e110]:
                - columnheader "Image" [ref=f40e111]
                - columnheader "Name" [ref=f40e112]
                - columnheader "Description" [ref=f40e113]
                - columnheader "Quantity" [ref=f40e114]
                - columnheader "Price" [ref=f40e115]
                - columnheader [ref=f40e116]
            - rowgroup [ref=f40e117]:
              - row [ref=f40e118]:
                - cell [ref=f40e119]
                - cell "JavaScript for Web Developers" [ref=f40e121]
                - cell "The ultimate JavaScript Programming guide for Web Developers" [ref=f40e122]
                - cell [ref=f40e123]:
                  - generic [ref=f40e125]:
                    - spinbutton [ref=f40e126]: "1"
                    - button "Update" [ref=f40e127] [cursor=pointer]
                - cell "40€" [ref=f40e128]
                - cell [ref=f40e129]:
                  - button "Delete" [ref=f40e130] [cursor=pointer]
          - generic [ref=f40e132]:
            - paragraph [ref=f40e133]: Summary
            - separator [ref=f40e134]
            - strong [ref=f40e135]: "Total: 40.00€"
            - link "Proceed To Checkout" [ref=f40e136] [cursor=pointer]:
              - /url: /bookstore/checkout
      - insertion [ref=f40e138]:
        - generic [ref=f40e141]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f40e143]: Discover more
          - link "Buy Lumber" [ref=f40e144] [cursor=pointer]
          - link "Compare Couriers" [ref=f40e149] [cursor=pointer]
          - link "Hire PM Experts" [ref=f40e154] [cursor=pointer]
          - link "Automation practice website" [ref=f40e159] [cursor=pointer]
          - link "Software Testing courses" [ref=f40e164] [cursor=pointer]
          - link "Automation testing tools" [ref=f40e169] [cursor=pointer]
          - link "QA certification training" [ref=f40e174] [cursor=pointer]
          - link "API testing tools" [ref=f40e179] [cursor=pointer]
  - insertion [ref=f40e185]
  - contentinfo [ref=f40e187]:
    - generic [ref=f40e192]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f40e193]
      - paragraph [ref=f40e194]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f40e195] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f40e196] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { BookstorePage } from '../pages/BookstorePage.js';
  3  | 
  4  | test('first book can be added to the cart', async ({ page }) => {
  5  |   const bookstore = new BookstorePage(page);
  6  |   await bookstore.signIn('kishanmasfj@gmail.com', 'kishan0203');
  7  | 
  8  |   const allProductText = await bookstore.allProductText();
  9  |   console.log('all product: ' + allProductText);
  10 | 
  11 |   await bookstore.addFirstProductToCart('JavaScript for Web Developers');
  12 |   await bookstore.cart();
  13 |   await bookstore.openCart();
  14 | 
  15 |   const cartProductText = await bookstore.getCartProductText();
> 16 |   expect(cartProductText).toContain(allProductText);
     |                           ^ TypeError: expect(JavaScript for Web Developers).toContain(JavaScript for Web Developers,The DevOps Handbook,Agile Testing,XSS_TEST_"><script>alert(document.domain)</script>,SIMPLE_TITLE) // indexOf
  17 | });
  18 | 
```