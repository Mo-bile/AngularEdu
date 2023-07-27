import { JustDoPage } from './app.po';

describe('just-do App', () => {
  let page: JustDoPage;

  beforeEach(() => {
    page = new JustDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
