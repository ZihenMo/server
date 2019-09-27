/*
* 生成Json数据,该文件可使用静态Json文件代替
*/

var faker = require('faker');
// 一个JS语言工具库
var _ = require('lodash');
module.exports = function() {

// 设置地区
faker.locale = "zh_CN";

return {
    user: _.times(10, (index) => {
        return {
            uid: faker.id,
            nickName: faker.name.findName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            description: faker.lorem.paragraph()
        }
    }),
    news: _.times(100, (index) => {
        return {
            id: index,
            title: faker.name.title(),
            content: faker.random.words(),
            image: faker.image.imageUrl()
        }
    })
}
};