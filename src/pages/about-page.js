import { LitElement, html, css } from "lit";

export class AboutPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }

    h1 {
      font-family: "Rosso", sans-serif;
      color: #1e4a43;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Sobre Nosotros</h1>
        <p>Esta es la página About</p>
      </div>
    `;
  }
}

customElements.define("about-page", AboutPage);
