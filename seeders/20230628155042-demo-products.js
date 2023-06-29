'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'MacBook Air M1 13-inch',
      price: 34900.00,
      currencyId: 1,
      url: 'https://www.apple.com/th-en/shop/buy-mac/macbook-air/13-inch-m1',
      mainImageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661',
      seller: 'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MacBook Air M2 13-inch',
      price: 31900.00,
      currencyId: 1,
      url: 'https://www.apple.com/th-en/shop/buy-mac/macbook-air/13-inch-m2',
      mainImageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665',
      seller: 'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Apple Watch Ultra',
      price: 34900.00,
      currencyId: 1,
      url: 'https://www.apple.com/th/shop/buy-watch/apple-watch-ultra',
      mainImageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQE93_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-ocean-ultra_VW_34FR_WF_CO_GEO_TH_LANG_TH?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054',
      seller: 'Apple',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Keen UNEEK (WHITE CAP/CORNSTALK)',
      price: 4231.50,
      currencyId: 1,
      url: 'https://www.keenthailand.com/women-s-uneek-white-cap-cornstalk.html',
      mainImageUrl: 'https://www.keenthailand.com/media/catalog/product/cache/7f1a3611b20696d64d4f81da363c6592/w/h/white_cap_cornstalk_4_.jpg',
      seller: 'Keen',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
