/*
Charles Walker
app-root.tsx
This component is the main page of the app where the breeds-button and accordion displays are rendered
*/
import { Component, h, Listen, Prop, State} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop({ mutable: true }) breeds: [string];

  @State() gotBreeds: boolean = false;

  @Listen('breeds', {target:'body'})
  breedsHandler(event:CustomEvent) {
    this.breeds = event.detail;
    this.gotBreeds = true;
  }


  render() {
    if(!this.gotBreeds) {
      return (
        <div>
          <header>
            <h1>Dog Breeds</h1>
          </header>
          <main>
          <breeds-button ></breeds-button>
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <h1>Dog Breeds</h1>
          </header>
          <main>
          <breeds-button ></breeds-button>
          {this.breeds.map((breed) =>
              <accordion-display  breedURL = {breed[0]} image = {breed[1]}></accordion-display>
            )}
          </main>
        </div>
      );
    }
  }
}
