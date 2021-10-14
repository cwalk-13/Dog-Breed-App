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

  @Prop({ mutable: true }) breedName: string;

  @Prop({ mutable: true }) breedImage: string;

  @State() gotBreeds: boolean = false;

  @Listen('breeds', {target:'body'})
  breedsHandler(event:CustomEvent) {
    this.breeds = event.detail;
    this.gotBreeds = true;
  }

  componentWillLoad() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res => {
      this.breedImage = res["message"];
      let str = res["message"];
      let sub1 = str.slice(0, str.lastIndexOf("/"));
      let name = sub1.slice(sub1.lastIndexOf("/")+1, sub1.length);
      this.createName(name);
      return res;
    })
  }

  createName(str) {
    var dash = str.indexOf('-');
    if (dash == -1) {
      this.breedName = this.capitalize(str);
    } else {
      this.breedName = this.capitalize(str.slice(dash+1)) + " " + this.capitalize(str.slice(0, dash));
    }
  }
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    if(!this.gotBreeds) {
      return (
        <div>
          <header>
            <h1>Dog Breeds</h1>
          </header>
          <main>
            <div>
              <h2>Check out this pup! {this.breedName}</h2>
              <img src={this.breedImage} width="400" height="400"></img>
            </div>
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
          <div>
              <h2>Check out this pup! {this.breedName}</h2>
              <img src={this.breedImage} width="400" height="400"></img>
          </div>
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
