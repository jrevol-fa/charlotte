import { CharlottePage } from './app.po';

describe('charlotte App', () => {
  let page: CharlottePage;

  beforeEach(() => {
    page = new CharlottePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
