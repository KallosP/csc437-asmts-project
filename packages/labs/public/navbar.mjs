import { toHtmlElement } from './toHtmlElement.mjs'

/*const template = document.createElement('template')
template.innerHTML = ```
    <header>
        <slot name="nav-title">Nav Title</slot>
        <nav>
            <a href="./index.html">Home</a>
            <a href="./projects.html">Projects</a>
            <a href="./hobbies.html">Hobbies</a>
        </nav>
    </header>
```*/
/*class NavBar extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'closed' })
		let clone = template.content.cloneNode(true)
		shadowRoot.append(clone)
	}
}*/

window.addEventListener('load', () => {
	const header = toHtmlElement(`
       	<header>
			<h1>Peter Kallos</h1>
			<nav>
				<a href="./index.html">Home</a>
				<a href="./projects.html">Projects</a>
				<a href="./hobbies.html">Hobbies</a>
			</nav>
		</header> 
    `)
	document.body.prepend(header)

	const navLinks = document.querySelectorAll('nav a') // Select all nav links
	const currentPage = window.location.pathname.split('/').pop() // Get current page filename
    console.log(currentPage)

	navLinks.forEach((link) => {
		const linkHref = link.getAttribute('href')

		// Check if link matches the current page
		if (linkHref === `./${currentPage}`) {
            link.style.fontWeight = "bold";
		}
	})
})
