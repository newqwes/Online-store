module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('product_option', [
      {
        price: 10.49,
        weight: 365,
        productId: 1,
      },
      {
        price: 22.89,
        weight: 585,
        productId: 1,
      },
      {
        price: 27.89,
        weight: 880,
        productId: 1,
      },
      {
        price: 10.49,
        weight: 350,
        productId: 2,
      },
      {
        price: 22.89,
        weight: 525,
        productId: 2,
      },
      {
        price: 27.89,
        weight: 785,
        productId: 2,
      },
      {
        price: 10.49,
        weight: 400,
        productId: 3,
      },
      {
        price: 22.89,
        weight: 620,
        productId: 3,
      },
      {
        price: 27.89,
        weight: 920,
        productId: 3,
      },
      {
        price: 10.49,
        weight: 375,
        productId: 4,
      },
      {
        price: 22.89,
        weight: 635,
        productId: 4,
      },
      {
        price: 27.89,
        weight: 945,
        productId: 4,
      },
      {
        price: 10.49,
        weight: 390,
        productId: 5,
      },
      {
        price: 22.89,
        weight: 585,
        productId: 5,
      },
      {
        price: 27.89,
        weight: 890,
        productId: 5,
      },
      {
        price: 14.49,
        weight: 370,
        productId: 6,
      },
      {
        price: 25.39,
        weight: 645,
        productId: 6,
      },
      {
        price: 28.89,
        weight: 950,
        productId: 6,
      },
      {
        price: 14.49,
        weight: 460,
        productId: 7,
      },
      {
        price: 25.39,
        weight: 715,
        productId: 7,
      },
      {
        price: 28.89,
        weight: 1020,
        productId: 7,
      },
      {
        price: 14.49,
        weight: 395,
        productId: 8,
      },
      {
        price: 25.39,
        weight: 625,
        productId: 8,
      },
      {
        price: 28.89,
        weight: 955,
        productId: 8,
      },
      {
        price: 14.49,
        weight: 395,
        productId: 9,
      },
      {
        price: 25.39,
        weight: 625,
        productId: 9,
      },
      {
        price: 28.89,
        weight: 955,
        productId: 9,
      },
      {
        price: 14.49,
        weight: 370,
        productId: 10,
      },
      {
        price: 25.39,
        weight: 645,
        productId: 10,
      },
      {
        price: 28.89,
        weight: 950,
        productId: 10,
      },
      {
        price: 13.49,
        weight: 370,
        productId: 11,
      },
      {
        price: 25.39,
        weight: 615,
        productId: 11,
      },
      {
        price: 28.89,
        weight: 945,
        productId: 11,
      },
      {
        price: 16.49,
        weight: 375,
        productId: 12,
      },
      {
        price: 25.39,
        weight: 615,
        productId: 12,
      },
      {
        price: 28.89,
        weight: 845,
        productId: 12,
      },
      {
        price: 12.49,
        weight: 375,
        productId: 13,
      },
      {
        price: 25.19,
        weight: 615,
        productId: 13,
      },
      {
        price: 28.89,
        weight: 845,
        productId: 13,
      },
      {
        price: 8.99,
        weight: 245,
        productId: 14,
      },
      {
        price: 7.49,
        weight: 180,
        productId: 15,
      },
      {
        price: 3.89,
        weight: 300,
        productId: 16,
      },
      {
        price: 0.7,
        weight: 25,
        productId: 17,
      },
    ]),

  down: queryInterface => queryInterface.bulkDelete('product_option', null, {}),
};
