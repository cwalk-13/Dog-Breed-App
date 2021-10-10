import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'breeds-button',
  styleUrl: 'breeds-button.css',
  shadow: true,
})
export class BreedsButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
