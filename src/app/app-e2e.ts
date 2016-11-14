describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('login', () => {
    element(By.name('email')).sendKeys('23@23.com');
    element(By.name('password')).sendKeys('0123');
    browser.sleep(1000);
    element(By.css('.form-signin')).submit().then(() => {
      element(By.buttonText('PDF生成')).click().then(() => {
        browser.sleep(3000);
        // browser.close();
        element(By.buttonText('PDF生成2')).click().then(() => {
          browser.sleep(3000);
          // browser.close();

        });
      });

    });
  });
});
