import { InternetShopPage } from './app.po';

describe('internet-shop App', () => {
  let page: InternetShopPage;

  beforeEach(() => {
    page = new InternetShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
