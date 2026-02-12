import { LitElement, html, css } from "lit";

export class AppHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: black;
      color: white;
    }

    nav a {
      margin-left: 1rem;
      text-decoration: none;
      color: white;
      font-weight: bold;
    }

    nav a:hover {
      opacity: 0.7;
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo">MiMarca</div>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Sobre</a>
          <a href="#">Contacto</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
