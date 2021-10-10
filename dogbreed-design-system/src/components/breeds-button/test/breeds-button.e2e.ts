import { newE2EPage } from '@stencil/core/testing';

describe('breeds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<breeds-button></breeds-button>');

    const element = await page.find('breeds-button');
    expect(element).toHaveClass('hydrated');
  });
});
