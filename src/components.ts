import html, { HTML } from '@leafac/html'
import { style as pageStyle } from './client/jegan'

const style = html`
main, header, section {
	display: grid;
	grid-gap: 1rem;
}
`

export function form () { return html`
	<form action="/" method="POST">
		<input type="text" name="name" placeholder="parent" required>
		<input type="text" name="quantity" placeholder="quantity" required>
		<input type="text" name="ref" placeholder="ref" required>
		<input type="submit" value="post">
	</form>
`}

export function layout (main:HTML):HTML { return html`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
	<link href="https://unpkg.com/sanitize.css/typography.css" rel="stylesheet" />
	<link href="https://unpkg.com/sanitize.css/forms.css" rel="stylesheet" />
	<link href="https://unpkg.com/sanitize.css/assets.css" rel="stylesheet" />
	<link href="https://unpkg.com/tailwindcss@^2/dist/components.min.css" rel="stylesheet" />
	<link href="https://unpkg.com/tailwindcss@^2/dist/utilities.min.css" rel="stylesheet" />
	<style>
		$${ style }
		$${ pageStyle }
	</style>
	<title>ts-koa-lite</title>
</head>
<body>
	<div class="container mx-auto">

		$${main}
	
	</div>
</body>
</html>
`.trim()}

