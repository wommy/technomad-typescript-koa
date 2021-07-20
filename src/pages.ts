import html, { HTML } from '@leafac/html'
// import { form } from '../components/'

// function dataMapper (data){ data.map( ea => html`
// 	<tr>
// 		<td>${ea.id}</td>
// 		<td>${ea.parent}</td>
// 		<td>${ea.child}</td>
// 	</tr>
// `)}

export function Index (data:any):HTML { return html`
	<main>
		<header>
			<h1>${data.title}</h1>
		</header>

		<section>
			<p>working</p>
		</section>
	</main>
`}
