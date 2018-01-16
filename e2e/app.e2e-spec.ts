import { NlgAppPage } from './app.po';

describe('nlg-app App', function() {
  let page: NlgAppPage;

  beforeEach(() => {
    page = new NlgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
