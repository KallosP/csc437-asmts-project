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
            flex-direction: column;
            align-items: flex-start;
            padding: 2em;
            background-color: var(--color-header-bg);
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 0.5em;
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
        <div>
            <slot name="nav-title">Nav Title</slot>
            <button>Menu</button>
        </div>
        <nav>
            <a href="./index.html">Home</a>
            <a href="./projects.html">Projects</a>
            <a href="./hobbies.html">Hobbies</a>
        </nav>
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
