const jsonServer = require('json-server');
const rules = require('./router.js');
const server = jsonServer.create();
const db = require('./generator');
const router = jsonServer.router(db());
const middleware = jsonServer.defaults();
const rewriter = jsonServer.rewriter;

server.use(middleware);
// 自定义访问控制
function isAuthorized(req) {
    console.log("当前请求:" + req.url);
    // console.log(req);
    console.log("rules:" + rules)
    for (const key in rules) {
        console.log(key);
        if (req.url.startsWith(key) || req.url === '/user') { // 在控制列表中授权访问
            return true;
        }
    }
    return false;
}

function isRefuseService(req) {
    return req.url.startsWith('/gp');
}

server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        next() // continue to JSON Server router
    }
    else if (isRefuseService(req)) {
        res.sendStatus(500)
    }
    else {
        res.sendStatus(401)
    }
});

// 修改响应
router.render = (req, res) => {
    res.jsonp({
        body: res.locals.data, // 包装到data下
        message:"success"
    });
    // res.status(500).jsonp({
    //     error: "error message here"
    // })
};

// 添加路由规则,须在.use(router)前
server.use(rewriter(rules));

// 修改响应
server.use(router);

// 启动服务
server.listen(3000, () => {
    console.log(db);
    console.log('JSON Server is Running!');
});
