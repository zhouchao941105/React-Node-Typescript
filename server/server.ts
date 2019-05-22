import * as koa from 'koa';
import * as R from 'koa-router'
const Router = new R()
const app = new koa()
Router.get('/list', async (ctx: any, next: any) => {
    ctx.body = '🌶🐔'
})
app.use(Router.routes());
app.use(Router.allowedMethods());
app.listen(9090)