import { LitElement, html, css } from "lit";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      border-radius: 50px; /* Forma de píldora */
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      width: 85vw; /* Píldora más ancha */
      max-width: 1200px; /* Límite máximo opcional */
      transition: all 0.3s ease;
    }

    nav {
      display: flex;
      gap: 2rem; /* Más espacio entre enlaces */
    }

    nav a {
      text-decoration: none;
      color: #fccabe;
      font-weight: bold;
      transition: opacity 0.3s;
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

  firstUpdated() {
    const header = this.shadowRoot.querySelector("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        // En la parte superior - siempre visible
        gsap.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.3,
        });
      } else if (currentScroll > lastScroll) {
        // Scroll hacia abajo - ocultar
        gsap.to(header, {
          y: -100,
          opacity: 0,
          duration: 0.3,
        });
      } else {
        // Scroll hacia arriba - mostrar
        gsap.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.3,
        });
      }

      lastScroll = currentScroll;
    });
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Sobre</a>
          <a href="#">Contacto</a>
        </nav>
        <div class="header-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
