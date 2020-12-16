const faker = require('faker');
// 一个JS语言工具库
const _ = require('lodash');
const mock = require('mockjs')
module.exports = function () {
// 设置地区
    faker.locale = "zh_CN";
    return {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        signature: faker.random.words(),
        avatar: mock.Random.image('100x100'),
        job: faker.name.jobDescriptor()
    }
};