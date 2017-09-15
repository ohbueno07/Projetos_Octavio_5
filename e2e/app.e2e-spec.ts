import { ClinicaEmagrecimento2Page } from './app.po';

describe('clinica-emagrecimento2 App', () => {
  let page: ClinicaEmagrecimento2Page;

  beforeEach(() => {
    page = new ClinicaEmagrecimento2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
