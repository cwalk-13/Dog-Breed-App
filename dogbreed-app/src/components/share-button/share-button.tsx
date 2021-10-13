import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'share-button',
  styleUrl: 'share-button.css',
  shadow: true,
})
export class ShareButton {
  @Prop() image: string;

  ShareToFaceBook() {
    let shareUrl = `http://www.facebook.com/sharer/sharer.phpu=${this.image}`;
    window.open(shareUrl,"NewWindow");
   }
  render() {
    return (
      <button class= "btn" type = "button" onClick={() => this.ShareToFaceBook()}>
        Share
      </button>
    );
  }

}
