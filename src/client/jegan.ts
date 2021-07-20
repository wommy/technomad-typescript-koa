import html from '@leafac/html'
import { layout } from '../components'

export const style = html`
.columns1 {
	grid-template-columns: 1fr 2fr 2fr;
	place-items: center;
}
.columns2 {
	grid-template-columns: 1fr 2fr;
	place-items: center;
}
h1 {
	margin: .5rem 1rem;
}
tr {
	display: grid;
	grid-gap: 1rem;
}
thead {
	border-bottom: 2px black solid;
}
tr:nth-child(even) {
	background-color: silver;
}
td {
	place-self: center;
}
`

const form = html`
	<form action="/" method="POST">
		<input type="text" name="name" placeholder="name" required>
		<input type="submit" value="post">
	</form>
`

export function Index (data) { return layout( html`
<main>
	<header class="columns2">
		<h1>jegan stock</h1>

	<form action="/" method="POST">
		<input type="text" name="ref" placeholder="ref">
		<input type="text" name="name" placeholder="name" required>
		<input type="submit" value="post">
	</form>
	</header>

	<section>
		<table>
			<thead>
				<tr class="columns1">
					<th>id</th>
					<th>name</th>
					<th>quantity</th>
				</tr>
			</thead>

			<tbody>
			$${ dataMapper(data) }
			</tbody>
		</table>
	</section>
</main>
`)}

const dataMapper = data => data.map( ea => html`
	<tr class="columns1">
		<td>${ea.id}</td>
		<td style="place-self:start;">${ea.ref+'__' || ''}${ea.name}</td>
		<td>${ea.quantity}</td>
	</tr>
`)

export function Todo (todo) { return layout( html`
<main>
	<header class="columns2">
		<h1>todo</h1>

	<form action="/todo" method="POST">
		<input type="text" name="category" placeholder="category">
		<input type="text" name="name" placeholder="name" required>
		<input type="submit" value="post">
	</form>
	</header>

	<section>
		<table>
			<thead>
				<tr class="columns2">
					<th>category</th>
					<th>name</th>
				</tr>
			</thead>
			<tbody>
			$${ todoMapper(todo) }
			</tbody>
		</table>
	</section>
</main>
` ) }

const todoMapper = data => data.map( ea => html`
	<tr class="columns2">
		<td>${ea.category}</td>
		<td>${ea.name}</td>
	</tr>
` ) 

// function dataMapper (data){ data.map( ea => html`
// 	<tr>
// 		<td>${ea.id}</td>
// 		<td>${ea.parent}</td>
// 		<td>${ea.child}</td>
// 	</tr>
// `)}

// function relationshipMapper (relationship){
// 	for ( let product in relationship){
// 		console.log(product)
// }
		// relationship[product].map( material => html``)
			// <tr>
			// 	<td>${Date.now()}</td>
			// 	<td>${product}</td>
			// 	<td>${material}</td>
			// </tr>

