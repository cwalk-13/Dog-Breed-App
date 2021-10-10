import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'accordion-display',
  styleUrl: 'accordion-display.css',
  shadow: true,
})
export class AccordionDisplay {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
