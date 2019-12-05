import { Component, Prop, h, Host } from "@stencil/core";
import shortid from "shortid";
import { format } from "../../utils/utils";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({ mutable: true }) first: string;

  /**
   * The middle name
   */
  @Prop({ mutable: true }) middle: string;

  /**
   * The last name
   */
  @Prop({ mutable: true }) last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentWillRender() {
    console.log("component will render", {
      first: this.first,
      middle: this.middle,
      last: this.last
    });
  }

  componentShouldUpdate(value: any, old: any, prop: string) {
    console.log("component should update", { value, old, prop });
  }

  updateState = () => {
    this.first = shortid.generate();
    this.middle = shortid.generate();
    this.last = shortid.generate();
  };

  render() {
    console.log("render method", {
      first: this.first,
      middle: this.middle,
      last: this.last
    });
    return (
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <button onClick={this.updateState}>Click Me to Update State</button>
      </Host>
    );
  }
}
