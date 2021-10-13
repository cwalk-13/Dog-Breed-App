import { Component, Host, h, EventEmitter, Event } from '@stencil/core';
// import { EventEmitter } from 'puppeteer';

@Component({
  tag: 'breeds-button',
  styleUrl: 'breeds-button.css',
  shadow: true,
})
export class BreedsButton {
  @Event({bubbles:true, composed:true}) breeds: EventEmitter;

  getBreeds() {
    return fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      this.breeds.emit(res);
      return res;
    })
  }
render() {
return (
  <button class= "btn" type = "button" onClick={() => this.getBreeds()}>
    All Dog Breeds
  </button>
);
}

}
