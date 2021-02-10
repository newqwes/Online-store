import { addToCart } from '../../actionCreators';
import { ADD_TO_CART } from '../../actions';

describe('actions', () => {
  it('addToCart action creator', () => {
    const payload = {
      id: 0,
      type: 'pizza',
      name: 'Фермерская',
      description: 'Описание небольшое',
      photoUrl: 'http://s.ru',
      unitSign: 'гр',
      currencySign: 'р.',
      option: { id: 12, price: 12.25, weight: 750, product_id: 0 },
    };

    const expectedAction = {
      type: ADD_TO_CART,
      payload,
    };

    expect(addToCart(payload)).toEqual(expectedAction);
  });
});
