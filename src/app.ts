import { Index, Todo } from "./client/jegan"
import data, { todo } from './data'
// import fs from 'fs'
// fs.writeFileSync('dist/way1.html', Index(data))
// console.log('wrote')
import Koa from 'koa'
import KoaRouter from 'koa-router'
import koaBody from 'koa-body'

const router = new KoaRouter()
	.get('/', koaBody(), async ctx => ctx.body = Index( data ) )
	.post('/', koaBody(), async ctx => {
		data.push({
			id: Date.now(),
			name: ctx.request.body.name,
			quantity: ctx.request.body.quantity || 0,
			ref: ctx.request.body.ref,
		})
		console.log(data)
		ctx.redirect('back')
	})
	.get('/todo', koaBody(), async ctx => ctx.body = Todo( todo ) )
	.post('/todo', koaBody(), async ctx => {
		todo.push({
			id: Date.now(),
			category: ctx.request.body.category || 'inbox',
			name: ctx.request.body.name,
		})
		console.log(todo)
		ctx.redirect('back')
	})

new Koa()
	.use( router.routes() ).use( router.allowedMethods() )
	.listen(3000, ()=> console.log(`serving.. 3000`))

