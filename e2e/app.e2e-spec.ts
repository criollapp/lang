import { XCommonModulePage } from './app.po';

describe('x-lang-module App', () => {
  let page: XCommonModulePage;

  beforeEach(() => {
    page = new XCommonModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
