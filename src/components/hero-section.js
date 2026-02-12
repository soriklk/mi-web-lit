import { LitElement, html, css } from "lit";
import gsap from "gsap";

export class HeroSection extends LitElement {
  static styles = css`
    section {
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #111;
      color: white;
      text-align: center;
      overflow: hidden;
    }

    h1 {
      font-size: 4rem;
      opacity: 0;
      transform: translateY(50px);
    }
  `;

  firstUpdated() {
    const title = this.renderRoot.querySelector("h1");

    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  }

  render() {
    return html`
      <section>
        <h1>Proyecto Visual con Lit</h1>
      </section>
    `;
  }
}

customElements.define("hero-section", HeroSection);
