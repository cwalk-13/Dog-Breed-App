import { newE2EPage } from '@stencil/core/testing';

describe('accordion-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-display></accordion-display>');

    const element = await page.find('accordion-display');
    expect(element).toHaveClass('hydrated');
  });
});
