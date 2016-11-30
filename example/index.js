'use strict'

const { resolve, join } = require('path')
const Koa = require('koa')
const app = new Koa()
const nj = require('../lib')


app.use(nj({
  debug: true,
  ext: 'html',
  path: resolve(join(__dirname, 'tmpl')),
  njConfig: {
    watch: true
  }
}))

app.use(async(ctx, next) => {
  ctx.render('index', { body: 'Hello World' })
})

app.listen(3000)
