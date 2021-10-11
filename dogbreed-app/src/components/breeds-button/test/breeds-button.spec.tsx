import { newSpecPage } from '@stencil/core/testing';
import { BreedsButton } from '../breeds-button';

describe('breeds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BreedsButton],
      html: `<breeds-button></breeds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <breeds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </breeds-button>
    `);
  });
});
