export class BookstorePage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('[type="submit"]');
    this.allBooksLink = page.getByRole('link', { name: 'All Books' });
    this.productTitles = page.locator('.card-title');
    this.addToCartButton = page.locator('.btn.btn-danger');
    this.cartLink = page.locator('a').filter({ has: page.locator('img[alt="Cart"]') });
    this.cartProductName = page.locator(
      '//table[contains(@class, "table")]/tbody/tr/td[2]'
    );
  }
  async signIn(email, password) {
    await this.page.goto('https://practice.expandtesting.com/bookstore/user/signin');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.allBooksLink.click();
  }
  async allProductText() {
    let text=[];
    for(let i=0;i<5;i++){
      const allproduct=await this.productTitles.nth(i).textContent()
      text.push(allproduct);
    }
    return text;
  }
  async addFirstProductToCart(name) {
    const productfetch= await this.productTitles.all()
    for(const product of productfetch){
      if(name=== await product.textContent()){
        await product.click()
        break;
      }
    }
  }
    async cart() {
    // await this.productTitles.first().click();
    await this.addToCartButton.click();
  }
  async openCart() {
    await this.cartLink.click();
  }

  async getCartProductText() {
    // let first=[]
    // const firsttext=await this.cartProductName.first().textContent()
    // first.push(firsttext)
    //  return first;
    return(await this.cartProductName.first().textContent())
  }
 
}
