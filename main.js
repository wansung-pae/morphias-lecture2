class MainHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 1rem 2rem;
                    background-color: #2a2a2a;
                    box-shadow: 0 5px 15px var(--shadow-color);
                }
                h1 {
                    margin: 0;
                    font-size: 2rem;
                    color: var(--primary-color);
                }
            </style>
            <header>
                <h1>0MORPHIAS0</h1>
            </header>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
}

class HeroSection extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 4rem 2rem;
                }
                h2 {
                    font-size: 4rem;
                    margin: 0;
                    color: var(--primary-color);
                    text-shadow: 0 0 20px var(--primary-color);
                }
            </style>
            <section>
                <h2>Welcome to my domain.</h2>
            </section>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
}

class FeaturedContent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    padding: 2rem;
                }
            </style>
            <section>
                <div class="card">
                    <h3>Project 1</h3>
                    <p>A brief description of the first project.</p>
                    <button>Learn More</button>
                </div>
                <div class="card">
                    <h3>Project 2</h3>
                    <p>A brief description of the second project.</p>
                    <button>Learn More</button>
                </div>
                <div class="card">
                    <h3>Project 3</h3>
                    <p>A brief description of the third project.</p>
                    <button>Learn More</button>
                </div>
            </section>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('main-header', MainHeader);
customElements.define('hero-section', HeroSection);
customElements.define('featured-content', FeaturedContent);
