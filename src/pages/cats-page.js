import { LitElement, html, css } from "lit";

export class CatsPage extends LitElement {
  static properties = {
    catFact: { type: String },
    catGif: { type: String },
  };

  static styles = [
    css`
      :host {
        display: block;
        padding: 20px;
        height: 100vh;
        margin-top: 80px; /* Para evitar solapamiento con el header */
      }

      .cat-gif {
        max-width: 500px;
        margin: 20px 0;
        border-radius: 8px;
      }
    `,
  ];

  constructor() {
    super();
    this.catFact = "Cargando dato del gato...";
    this.catGif = "";
  }

  async firstUpdated() {
    try {
      // Obtener el cat fact
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      this.catFact = data.fact;

      // Extraer las primeras 3 palabras
      const firstThreeWords = data.fact.split(" ").slice(0, 3).join(" ");

      const GIPHY_API_KEY = "xaj9QJNcVOFmOP0rR96nSa2sbmUvyorP";
      const giphyResponse = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=cat ${firstThreeWords}&limit=1&rating=g`,
      );
      const giphyData = await giphyResponse.json();

      if (giphyData.data && giphyData.data.length > 0) {
        this.catGif = giphyData.data[0].images.original.url;
      }
    } catch (error) {
      console.error("Error fetching cat data:", error);
      this.catFact = "No se pudo cargar el dato del gato.";
    }
  }

  render() {
    return html`
      <h1>Cats Page</h1>
      <p>Esta es la página de los gatos</p>
      <p>${this.catFact}</p>

      ${this.catGif
        ? html`<img class="cat-gif" src="${this.catGif}" alt="Cat gif" />`
        : html`<p>Cargando gif...</p>`}
    `;
  }
}

customElements.define("cats-page", CatsPage);
