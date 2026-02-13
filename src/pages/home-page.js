import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    .home-container {
      margin: 20px;
      border: 1px solid #fccabe;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 40px); /* Resta los márgenes */
      padding: 20px;
      border-radius: 20px;
      gap: 20px;
      box-sizing: border-box;
    }

    .part {
      display: flex;
      padding: 20px;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #fccabe;
      border-radius: 20px;
      flex: 1;
    }

    h1 {
      font-family: "Rosso", sans-serif;
      font-size: 150px;

      margin: 0;
    }

    p {
      font-family: "Rosso", sans-serif;
      font-size: 50px;
      margin: 0;
  `;

  render() {
    return html`
      <div class="home-container">
        <div class="part">
          <h1>GROVE</h1>
          <p>FRONTEND DEVELOPER</p>
        </div>
        <div class="part">
          <h1>GROVE</h1>
          <p>FRONTEND DEVELOPER</p>
        </div>
        <div class="part">
          <h1>GROVE</h1>
          <p>FRONTEND DEVELOPER</p>
        </div>
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);
