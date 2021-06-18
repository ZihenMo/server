/*
* 生成Json数据,该文件可使用静态Json文件代替
*/

const faker = require('faker');
const user_generator = require('./user.js')
const product_generator = require('./products')
// 一个JS语言工具库
const _ = require('lodash');
module.exports = function () {
// 设置地区
    faker.locale = "zh_CN";
    return {
        user: _.times(100, (index) => {
            return user_generator();
        }),
        news: _.times(100, (index) => {
            return {
                id: index,
                title: faker.name.title(),
                content: faker.random.words(),
                image: faker.image.imageUrl()
            }
        }),
        products: _.times(10, (index) => {
            return product_generator();
        })
    }
};