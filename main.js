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

class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 2rem;
                    text-align: center;
                }
                .lotto-card {
                    background-color: #2a2a2a;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    box-shadow: 0 10px 20px var(--shadow-color), 0 0 10px var(--secondary-color);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .lotto-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px var(--shadow-color), 0 0 20px var(--primary-color);
                }
                h3 {
                    color: var(--primary-color);
                    text-shadow: 0 0 10px var(--primary-color);
                }
                .numbers {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin: 1rem 0;
                }
                .number {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: var(--primary-color);
                    color: var(--text-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                    box-shadow: 0 0 10px var(--primary-color);
                }
                button {
                    background-color: var(--primary-color);
                    color: var(--text-color);
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: background-color 0.3s, box-shadow 0.3s;
                    box-shadow: 0 0 10px var(--primary-color);
                }
                button:hover {
                    background-color: var(--secondary-color);
                    box-shadow: 0 0 20px var(--secondary-color);
                }
            </style>
            <div class="lotto-card">
                <h3>Lotto Number Generator</h3>
                <div class="numbers"></div>
                <button>Generate Numbers</button>
            </div>
        `;
        shadow.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.generateNumbers();
        });
    }

    generateNumbers() {
        const numbersContainer = this.shadowRoot.querySelector('.numbers');
        numbersContainer.innerHTML = '';
        const numbers = new Set();
        while(numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        
        for (const number of Array.from(numbers).sort((a, b) => a - b)) {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numbersContainer.appendChild(numberElement);
        }
    }
}

customElements.define('main-header', MainHeader);
customElements.define('hero-section', HeroSection);
customElements.define('featured-content', FeaturedContent);
customElements.define('lotto-generator', LottoGenerator);
