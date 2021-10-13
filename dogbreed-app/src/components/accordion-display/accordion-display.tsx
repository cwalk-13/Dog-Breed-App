import { Component, h, State, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'accordion-display',
  styleUrl: 'accordion-display.css',
  shadow: true,
})
export class AccordionDisplay {

  @State() toggle: boolean = false;

  @State() newImage: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() breedURL: string;

  @Prop() breedName: string;

  @Prop() image: string;

  @Prop() width: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
    console.log(this.breedURL);
  }

  getDog() {
    return fetch(`http://localhost:5000/${this.breedURL}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.image = res["message"];
      this.newImage = !this.newImage;
      return res;
    })
  }

  componentWillLoad() {
    var slash = this.breedURL.indexOf('/');
    if (slash == -1) {
      this.breedName = this.capitalize(this.breedURL)
    } else {
      this.breedName = this.capitalize(this.breedURL.slice(slash+1)) + " " + this.capitalize(this.breedURL.slice(0, slash))
    }
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {

    return (
      <div>
        <button class="accordion"
          style={{width: this.width}}
          onClick={() => this.toggleComponent()}>
          {this.breedName}
          {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>
        <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
          style={{width: this.width}}>
          <img src={`${this.image}`} width="400" height="400"></img>
          <share-button image={`${this.image}`}></share-button>
          <button class="btn" type = "button" onClick= {() => this.getDog()}>Next Image</button>
        </div>
      </div>
    )
  }
}

