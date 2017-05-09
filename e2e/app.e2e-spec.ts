import { DetainmentPage } from './app.po';

describe('detainment App', () => {
  let page: DetainmentPage;

  beforeEach(() => {
    page = new DetainmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
