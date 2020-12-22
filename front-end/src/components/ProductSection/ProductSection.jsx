import React from 'react';
import { ProductSectionStyle, ProductSectionWrapper } from './styled';
import ProductItems from '../ProductItems';

const products = [
  {
    id: 1,
    name: 'Фермерская',
    description: 'Кунжут, Курица, Соус терияки, Сыр моцарелла, Томаты, Пепперони, Сладкий перец',
    price: '23.39 руб.',
    weight: '585 гр',
    image: 'https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png',
  },
  {
    id: 2,
    name: 'Пепперони Блюз',
    description: 'Крем фреш, Пепперони, Шпинат, Сыр моцарелла, Обжаренный лук, Телятина, Бекон, Соус барбекю',
    price: '23.39 руб.',
    weight: '525 гр',
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni_bluz.png',
  },
  {
    id: 3,
    name: 'Овощная',
    description: 'Мюнхенские колбаски, Соус карри, Сыр моцарелла, Ананас, Ветчина, Курица',
    price: '23.39 руб.',
    weight: '620 гр',
    image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png',
  },
  {
    id: 4,
    name: 'Гавайская',
    description: 'Сладкий перец, Буженина, Шампиньоны, Соус барбекю, Сыр моцарелла, Пепперони, Пармезан, Лук',
    price: '26.39 руб.',
    weight: '660 гр',
    image: 'https://images.dominos.by/media/dominos/osg/api/2020/07/01/gavayskaya_new_small.png',
  },
  {
    id: 5,
    name: 'Чикен Карри',
    description: 'Томаты, Фета, Курица, Сыр моцарелла, Соус Чесночный, Шпинат',
    price: '29.39 руб.',
    weight: '595 гр',
    image:
      'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D1%81hicken_curry_small-min.png',
  },
];

const ProductSection = () => (
  <ProductSectionStyle>
    <ProductSectionWrapper>
      <ProductItems products={products} />
    </ProductSectionWrapper>
  </ProductSectionStyle>
);

export default ProductSection;
