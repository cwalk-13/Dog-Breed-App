import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'breeds-button',
  styleUrl: 'breeds-button.css',
  shadow: true,
})
export class BreedsButton {

  getBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res
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
