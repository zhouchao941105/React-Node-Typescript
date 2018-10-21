const koa = require('koa');
const Router = require('koa-router')()
var app = new koa()
Router.get('/list', async (ctx, next) => {
    ctx.body = 'hello'
})
app.use(Router.routes())
app.listen(9090, (err, res) => {
    console.log('ok')
})