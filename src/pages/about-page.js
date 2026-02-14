import { LitElement, html, css } from "lit";

export class AboutPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      height: 100vh;
      margin-top: 80px; /* Para evitar solapamiento con el header */
    }

    h1 {
      font-family: "Rosso", sans-serif;
      color: #1e4a43;
    }
  `;

  render() {
    return html`
      <div>
        <p>Esta es la página About</p>
      </div>
    `;
  }
}

customElements.define("about-page", AboutPage);
