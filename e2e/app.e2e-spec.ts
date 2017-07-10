import { Angular4Test2Page } from './app.po';

describe('angular4-test2 App', function() {
  let page: Angular4Test2Page;

  beforeEach(() => {
    page = new Angular4Test2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
