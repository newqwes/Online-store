module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('product', [
      {
        name: 'Фермерская',
        type: 'pizza',
        description:
          'Кунжут, Курица, Соус терияки, Сыр моцарелла, Томаты, Пепперони, Сладкий перец',
        photoUrl:
          'https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png',
        unitSign: 'гр',
        currencySign: 'р.',
      },
      {
        name: 'Пепперони Блюз',
        type: 'pizza',
        description:
          'Крем фреш, Пепперони, Шпинат, Сыр моцарелла, Обжаренный лук, Телятина, Бекон, Соус барбекю',
        photoUrl: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni_bluz.png',
        unitSign: 'гр',
        currencySign: 'р.',
      },
      {
        name: 'Овощная',
        type: 'pizza',
        description: 'Мюнхенские колбаски, Соус карри, Сыр моцарелла, Ананас, Ветчина, Курица',
        photoUrl: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png',
        unitSign: 'гр',
        currencySign: 'р.',
      },
      {
        name: '6 Наггетсов',
        type: 'chicken',
        description:
          'Голень цыпленка-бройлера, вода питьевая, соль поваренная пищевая, регулятор кислотности',
        photoUrl: 'https://statickfc.cdnvideo.ru/products/medium/product_1917_599951567.png',
        unitSign: 'гр',
        currencySign: 'р.',
      },
      {
        name: 'Соус Сырный оригинальный',
        type: 'sauce',
        description: 'Соус Сырный оригинальный',
        photoUrl: 'https://statickfc.cdnvideo.ru/products/medium/product_466_1240492958.png',
        unitSign: 'гр',
        currencySign: 'р.',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('product', null, {}),
};
