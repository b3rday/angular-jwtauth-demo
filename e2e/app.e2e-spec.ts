import { NgjwtauthdemoPage } from './app.po';

describe('ngjwtauthdemo App', () => {
  let page: NgjwtauthdemoPage;

  beforeEach(() => {
    page = new NgjwtauthdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
