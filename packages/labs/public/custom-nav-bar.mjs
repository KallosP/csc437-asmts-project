import { attachShadow } from './utils.mjs'

const TEMPLATE = document.createElement('template')
TEMPLATE.innerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        header{
            display: flex;
            align-items: flex-start;
            padding: 2em;
            background-color: var(--color-header-bg);
        }

        .title-links{
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 1.5em;
            margin-bottom: 0.5em;
        }

        .controls {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 1.5em;
            justify-content: flex-end;
        }

        label {
            display: flex; 
            gap: 0.5em;
        }

        button {
            display: initial;
            padding: 0.5em;
            border-radius: 0.5em;
        }

        nav {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }

        a {
            color: var(--color-accent);
        }

        @media (min-width: 800px) {
            header {
                flex-direction: row; 
                align-items: center;
            }

            .title-links {
                flex-direction: row;
                align-items: center;
            }

            button {
                display: none;
            }
            nav {
                display: flex !important;
                flex-direction: row;
            }
            div {
                margin-bottom: 0; 
                width: auto;
                margin-right: 2em !important;
            }
        }

    </style>
    <header>
        <div class="title-links">
            <slot name="nav-title">Nav Title</slot>
            <nav>
                <a href="./index.html">Home</a>
                <a href="./projects.html">Projects</a>
                <a href="./hobbies.html">Hobbies</a>
            </nav>
        </div>
        <div class="controls">
            <label>
                <input type="checkbox" autocomplete="off" />
                Light mode
            </label>
            <button>Menu</button>
        </div>
    </header> 
`

class CustomNavBar extends HTMLElement {
	connectedCallback() {
		const shadowRoot = attachShadow(this, TEMPLATE)

		// Emphasize/bold link of active page after the page loads
		// Get all the links within nav
		const navLinks = shadowRoot.querySelectorAll('nav a')
		// Get the current page's file name and remove the leading './'
		let currentPage = window.location.pathname.split('/').pop()
		// Edge case: On initial load of website, current page URL is root ('/')
		// and currentPage is therefore ''. Set currentPage to 'index.html' if at root
		if (currentPage === '') {
			currentPage = 'index.html'
		}
		// Find the link that matches the current page and make it bold
		navLinks.forEach((link) => {
			const linkHref = link.getAttribute('href')

			// Check if link matches the current page
			if (linkHref === `./${currentPage}`) {
				link.style.fontWeight = 'bold'
			}
		})

		// Close menu on click
		document.addEventListener('click', (e) => {
			// Checks if the click was outside the CustomNavBar component, if so, close the menu
			//
			// Check if display is flex just in case (to short ciruit)
			// Next, check if the click was NOT inside the shadow DOM/CustomNavBar component
			if (nav.style.display === 'flex' && !this.contains(e.target)) {
				nav.style.display = 'none'
			}
		})

		// Button logic
		const btn = shadowRoot.querySelector('button')
		const nav = shadowRoot.querySelector('nav')
		// Initialize nav's display type to none
		nav.style.display = 'none'
		btn.addEventListener('click', () => {
			console.log('clicked')
			nav.style.display = nav.style.display === 'none' ? 'flex' : 'none'
		})
	}
}

customElements.define('custom-nav-bar', CustomNavBar)
