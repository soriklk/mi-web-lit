import { LitElement, html, css } from "lit";
import "./app-header.js";
import "./app-footer.js";
import "../pages/home-page.js";

export class AppLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
      height: 100vh;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <home-page></home-page>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-layout", AppLayout);
