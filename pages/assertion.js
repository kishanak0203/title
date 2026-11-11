export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.phonesHeading = page.getByText('Phones');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openLoginForm() {
    await this.loginLink.click();
  }

  async fillCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }
}
