import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import gsap from "gsap";

export class AppHeader extends LitElement {
  static styles = css`
    header {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 3rem;
      background: #1e4a43;
      color: #fccabe;
      border: 1px solid #fccabe;
      border-radius: 50px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      width: 85vw;
      max-width: 1200px;
      transition: all 0.3s ease;
    }

    nav {
      display: flex;
      gap: 2rem;
    }

    nav a {
      text-decoration: none;
      color: #fccabe;
      font-weight: bold;
      transition: all 0.3s;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
    }

    nav a:hover {
      opacity: 0.7;
    }

    .header-buttons {
      display: flex;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1.5rem;
      background: transparent;
      color: #fccabe;
      border: 1px solid #fccabe;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;
    }

    button:hover {
      background: #fccabe;
      color: #1e4a43;
    }
  `;

  _navigate(e) {
    e.preventDefault();
    Router.go(e.target.getAttribute("href"));
  }

  firstUpdated() {
    const header = this.shadowRoot.querySelector("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        gsap.to(header, { y: 0, opacity: 1, duration: 0.3 });
      } else if (currentScroll > lastScroll) {
        gsap.to(header, { y: -100, opacity: 0, duration: 0.3 });
      } else {
        gsap.to(header, { y: 0, opacity: 1, duration: 0.3 });
      }

      lastScroll = currentScroll;
    });
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="/" @click=${this._navigate}>Inicio</a>
          <a href="/about" @click=${this._navigate}>Sobre</a>
          <a href="/contact" @click=${this._navigate}>Contacto</a>
        </nav>
        <div class="header-buttons">
          <button @click=${() => Router.go("/login")}>Login</button>
          <button @click=${() => Router.go("/signup")}>Sign Up</button>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
