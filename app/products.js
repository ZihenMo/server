const faker = require('faker');
const mock = require('mockjs');
module.exports = function () {
// 设置地区
    faker.locale = "zh_CN";
    return {
        skuId: faker.random.uuid(),
        name: faker.commerce.productName(),
        product: faker.commerce.product(),
        category: faker.commerce.department(),
        attribute: faker.commerce.color(),
        avatar: mock.Random.image('100x100'),
        price: faker.commerce.price(),
        currencySymbol: faker.finance.currencySymbol(),
        currencyCode: faker.finance.currencyCode(),
    }
};