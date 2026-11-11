# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> first book can be added to the cart
- Location: tests\pom.spec.js:4:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: ["JavaScript for Web Developers"]
Received array: ["JavaScript for Web Developers", "The DevOps Handbook", "Agile Testing", "XSS_TEST_\"><script>alert(document.domain)</script>", "SIMPLE_TITLE"]
```

# Page snapshot

```yaml
- generic [active] [ref=f41e1]:
  - paragraph [ref=f41e3]:
    - link "PMP Practice" [ref=f41e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - banner [ref=f41e6]:
    - navigation "Main navigation" [ref=f41e7]:
      - link "SUT" [ref=f41e8] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=f41e9]'
        - text: Practice
      - generic [ref=f41e10]:
        - list [ref=f41e11]:
          - listitem [ref=f41e12]:
            - button "Demos" [ref=f41e13] [cursor=pointer]
          - listitem [ref=f41e14]:
            - link "Tools" [ref=f41e15] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f41e16]:
            - link "Tips" [ref=f41e17] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=f41e18]:
            - link "Test Cases" [ref=f41e19] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=f41e20]:
            - link "API Testing" [ref=f41e21] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=f41e22]:
            - link "About" [ref=f41e23] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=f41e24] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=f41e25]:
    - insertion [ref=f41e29]:
      - iframe [ref=f41e31]
    - paragraph [ref=f41e33]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=f41e34] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=f41e35]:
      - insertion [ref=f41e37]:
        - generic [ref=f41e40]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f41e42]: Discover more
          - link "Learn to Code" [ref=f41e43] [cursor=pointer]
          - link "Source Robotics" [ref=f41e48] [cursor=pointer]
          - link "Try Dev Tools" [ref=f41e53] [cursor=pointer]
          - link "Try Cloud Tools" [ref=f41e58] [cursor=pointer]
          - link "Shopping Cart" [ref=f41e63] [cursor=pointer]
          - link "Unlock Discounts" [ref=f41e68] [cursor=pointer]
          - link "Commercial Shopping Carts" [ref=f41e73] [cursor=pointer]
          - link "Buy Lumber" [ref=f41e78] [cursor=pointer]
      - generic [ref=f41e85]:
        - navigation "breadcrumb mb-2" [ref=f41e86]:
          - list [ref=f41e87]:
            - listitem [ref=f41e88]:
              - link "Home" [ref=f41e89] [cursor=pointer]:
                - /url: /
            - listitem [ref=f41e90]:
              - text: /
              - link "E-commerce Bookstore Practice Automation" [ref=f41e91] [cursor=pointer]:
                - /url: /bookstore
        - navigation [ref=f41e92]:
          - generic [ref=f41e93]:
            - link "All Books" [ref=f41e94] [cursor=pointer]:
              - /url: /bookstore
            - link "Cart 1" [ref=f41e95] [cursor=pointer]:
              - /url: /bookstore/cart
              - img "Cart" [ref=f41e96]
              - generic [ref=f41e97]: "1"
            - button "kishan" [ref=f41e100] [cursor=pointer]
        - heading "Shopping Cart" [level=1] [ref=f41e102]
        - generic [ref=f41e103]:
          - table [ref=f41e105]:
            - rowgroup [ref=f41e106]:
              - row [ref=f41e107]:
                - columnheader "Image" [ref=f41e108]
                - columnheader "Name" [ref=f41e109]
                - columnheader "Description" [ref=f41e110]
                - columnheader "Quantity" [ref=f41e111]
                - columnheader "Price" [ref=f41e112]
                - columnheader [ref=f41e113]
            - rowgroup [ref=f41e114]:
              - row [ref=f41e115]:
                - cell [ref=f41e116]
                - cell "JavaScript for Web Developers" [ref=f41e118]
                - cell "The ultimate JavaScript Programming guide for Web Developers" [ref=f41e119]
                - cell [ref=f41e120]:
                  - generic [ref=f41e122]:
                    - spinbutton [ref=f41e123]: "1"
                    - button "Update" [ref=f41e124] [cursor=pointer]
                - cell "40€" [ref=f41e125]
                - cell [ref=f41e126]:
                  - button "Delete" [ref=f41e127] [cursor=pointer]
          - generic [ref=f41e129]:
            - paragraph [ref=f41e130]: Summary
            - separator [ref=f41e131]
            - strong [ref=f41e132]: "Total: 40.00€"
            - link "Proceed To Checkout" [ref=f41e133] [cursor=pointer]:
              - /url: /bookstore/checkout
      - insertion [ref=f41e135]:
        - generic [ref=f41e138]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f41e140]: Discover more
          - link "Compare Couriers" [ref=f41e141] [cursor=pointer]
          - link "Compare Cars" [ref=f41e146] [cursor=pointer]
          - link "Hire PM Experts" [ref=f41e151] [cursor=pointer]
          - link "Get Certified" [ref=f41e156] [cursor=pointer]
          - link "Automation practice website" [ref=f41e161] [cursor=pointer]
          - link "Software Testing courses" [ref=f41e166] [cursor=pointer]
          - link "Automation testing tools" [ref=f41e171] [cursor=pointer]
          - link "QA certification training" [ref=f41e176] [cursor=pointer]
  - contentinfo [ref=f41e181]:
    - generic [ref=f41e186]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=f41e187]
      - paragraph [ref=f41e188]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=f41e189] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=f41e190] [cursor=pointer]
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
> 16 |   expect(allProductText).toContain(cartProductText);
     |                          ^ Error: expect(received).toContain(expected) // indexOf
  17 | });
  18 | 
```