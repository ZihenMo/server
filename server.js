const jsonServer = require('json-server');
const rules = require('./router.json');
const server = jsonServer.create();
const data = require('./generator');
const router = jsonServer.router(data());
const middlewares = jsonServer.defaults();

server.use(middlewares);


// 自定义访问控制
server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        res.jsonp({
            body: res.locals.data   // 将数据封装到data字段下
        })
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
});

function isAuthorized(req) {
    console.log("当前请求:" + req.url);
    // console.log(req);
    for (var key in rules) {
        if (req.url.startsWith(key) || req.url == '/user') {
            return true;
        }
    }
    return false;
}
// 添加路由规则,须在.use(router)前
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/other/news':'/news'
}));

// 修改响应
server.use(router);

// 启动服务
server.listen(3000, () => {
    console.log('JSON Server is Running!');
});
