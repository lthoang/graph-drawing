import { GraphDrawingPage } from './app.po';

describe('graph-drawing App', function() {
  let page: GraphDrawingPage;

  beforeEach(() => {
    page = new GraphDrawingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
