import { LitElement, html, css } from "lit";

export class AppFooter extends LitElement {
  static styles = css`
    footer {
      border: 1px solid #fccabe;
      border-radius: 20px;
      margin: 20px;
      min-height: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #1e4a43;
      color: #fccabe;
      gap: 2rem;
    }

    .footer-izquierda {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .footer-text p {
      margin: 5px 0;
    }

    .footer-redes {
      display: flex;
      gap: 1rem;
    }

    .footer-redes a {
      color: #fccabe;
      text-decoration: none;
      transition: opacity 0.3s;
    }

    .footer-redes a:hover {
      opacity: 0.7;
    }

    .footer-derecha-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-width: 300px;
    }

    .footer-derecha-form h3 {
      margin: 0 0 10px 0;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    input,
    textarea {
      padding: 0.8rem;
      border: 1px solid #fccabe;
      border-radius: 8px;
      background: transparent;
      color: #fccabe;
      font-family: inherit;
    }

    input::placeholder,
    textarea::placeholder {
      color: rgba(252, 202, 190, 0.6);
    }

    textarea {
      min-height: 80px;
      resize: vertical;
    }

    button {
      padding: 0.8rem 1.5rem;
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

  async _handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meelaqyv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("¡Mensaje enviado correctamente!");
        form.reset();
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  }

  render() {
    return html`
      <footer>
        <div class="footer-izquierda">
          <div class="footer-text">
            <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
            <p>Diseñado por Mi Equipo de Desarrollo.</p>
          </div>
          <div class="footer-redes">
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
            <a href="https://www.twitter.com" target="_blank">Twitter</a>
            <a href="https://www.instagram.com" target="_blank">Instagram</a>
          </div>
        </div>

        <div class="footer-derecha-form">
          <h3>Contáctanos</h3>
          <form @submit="${this._handleSubmit}">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
