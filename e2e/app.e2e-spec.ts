import { TechDataFBPage } from './app.po';

describe('tech-data-fb App', () => {
  let page: TechDataFBPage;

  beforeEach(() => {
    page = new TechDataFBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
