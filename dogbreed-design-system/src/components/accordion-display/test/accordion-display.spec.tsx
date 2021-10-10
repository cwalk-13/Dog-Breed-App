import { newSpecPage } from '@stencil/core/testing';
import { AccordionDisplay } from '../accordion-display';

describe('accordion-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionDisplay],
      html: `<accordion-display></accordion-display>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-display>
    `);
  });
});
