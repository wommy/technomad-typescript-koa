import { layout } from "./components"
import { Index } from "./Pages"
import meta from './data'
// import fs from 'fs'
// fs.writeFileSync('dist/index.html', index)
// console.log('wrote')
import Koa from 'koa'
import KoaRouter from 'koa-router'
import koaBody from 'koa-body'

const router = new KoaRouter()
	.get('/', koaBody(), async ctx => ctx.body = layout( Index( meta ) ) )
	// .post('/', koaBody(), async ctx => {
	// 	data.push({
	// 		id: Date.now(),
	// 		parent: ctx.request.body.parent,
	// 		child: ctx.request.body.child,
	// 	})
	// 	ctx.redirect('back')
	// })

new Koa()
	.use( router.routes() ).use( router.allowedMethods() )
	.listen(3000, ()=> console.log(`serving.. 3000`))

