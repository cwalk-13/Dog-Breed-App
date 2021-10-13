import { Component, h, Listen, Prop, State} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @Prop() breeds: [string];

  @State() gotBreeds: boolean = false;

  @Listen('breeds', {target:'body'})
  breedsHandler(event:CustomEvent) {
    this.breeds = event.detail;
    console.log(this.breeds);
    this.gotBreeds = true;
  }

  render() {
    if(!this.gotBreeds) {
      return (
        <div>
          <header>
            <h1>Stencil App Starter</h1>
          </header>

          <main>
            {/* <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
              </stencil-route-switch>
            </stencil-router> */}
          </main>
          <breeds-button ></breeds-button>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <h1>Stencil App Starter</h1>
          </header>

          <main>
          <breeds-button ></breeds-button>
          {this.breeds.map((breed) =>
              <accordion-display  breedURL = {breed}></accordion-display>
            )}
          </main>
        </div>
      );
    }
  }
}
