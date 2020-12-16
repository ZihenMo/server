const faker = require('faker');
const mock = require('mockjs')
module.exports = function () {
// 设置地区
    faker.locale = "zh_CN";
    return {
        skuId: faker.random.uuid(),
        name: faker.name.findName(),
        signature: mock.Random.paragraph(1, 5),
        avatar: mock.Random.image('100x100'),
        job: faker.name.jobDescriptor()
    }
} ();