import { LitElement, html, css } from "lit";

export class AppFooter extends LitElement {
  static styles = css`
    footer {
      padding: 2rem;
      text-align: center;
      background: black;
      color: white;
    }
  `;

  render() {
    return html` <footer>© 2026 - Mi Proyecto Lit</footer> `;
  }
}

customElements.define("app-footer", AppFooter);
