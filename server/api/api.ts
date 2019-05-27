import * as R from 'koa-router'
const Router = new R()
Router.get('/list', async (ctx: any, next: any) => {
    ctx.body = '🌶🐔'
})
export default Router