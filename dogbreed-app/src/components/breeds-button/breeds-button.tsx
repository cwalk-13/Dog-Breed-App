/*
Charles Walker
breeds-button.tsx
This component is a button that calls the api to recieve the list of dog breeds
*/
import { Component, h, EventEmitter, Event } from '@stencil/core';

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
