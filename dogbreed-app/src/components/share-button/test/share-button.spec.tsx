import { newSpecPage } from '@stencil/core/testing';
import { ShareButton } from '../share-button';

describe('share-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShareButton],
      html: `<share-button></share-button>`,
    });
    expect(page.root).toEqualHtml(`
      <share-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </share-button>
    `);
  });
});
