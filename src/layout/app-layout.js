import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import "./app-header.js";
import "./app-footer.js";

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

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector("main");
    const router = new Router(outlet);

    router.setRoutes([
      {
        path: "/",
        component: "home-page",
        action: async () => {
          await import("../pages/home-page.js");
        },
      },
      {
        path: "/about",
        component: "about-page",
        action: async () => {
          await import("../pages/about-page.js");
        },
      },

      {
        path: "(.*)",
        redirect: "/",
      }, // 404 - redirige al home
    ]);
  }

  render() {
    return html`
      <app-header></app-header>
      <main>
        <!-- El router renderizará las páginas aquí -->
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-layout", AppLayout);
