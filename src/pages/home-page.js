import { LitElement, html, css } from "lit";
import "../components/hero-section.js";

export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html` <hero-section></hero-section> `;
  }
}

customElements.define("home-page", HomePage);
