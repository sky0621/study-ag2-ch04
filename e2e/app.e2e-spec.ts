import { TestProgramPage } from './app.po';

describe('test-program App', function() {
  let page: TestProgramPage;

  beforeEach(() => {
    page = new TestProgramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
