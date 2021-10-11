import { Component, Host, h, State, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'accordion-display',
  styleUrl: 'accordion-display.css',
  shadow: true,
})
export class AccordionDisplay {
  // **ngFor="let item of list"
  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Prop() breedName: string;

  @Prop() image: string;

  @Prop() width: string;

  @Prop() color: string;

  toggleComponent() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {

    return (
      <div>
        <button class="accordion"
          style={{
            width: this.width,
            backgroundColor: this.color,
          }}
          onClick={() => this.toggleComponent()}>
          {this.breedName}
          {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>
        <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
          style={{width: this.width}}>
          <img src={`${this.image}`} width="200" height="200"></img>
          {/* <dogbreed-button text="Share"></dogbreed-button> */}
        </div>
      </div>
    )
  }
}

