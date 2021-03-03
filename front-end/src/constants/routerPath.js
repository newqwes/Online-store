const routers = {
  products: {
    main: '/products',
    pizza: '/products?type=pizza',
    salad: '/products?type=salad',
    drink: '/products?type=drink',
    sauce: '/products?type=sauce',
    chicken: '/products?type=chicken',
  },
  main: '/',
  cart: '/cart',
  order: '/order',
  login: '/login',
  profile: '/profile',
  contacts: '/contacts',
  cartSubmit: '/cart_submit',
  registration: '/registration',
  orderSuccessMessage: '/order_success_message',
};

const navbar = [
  { id: 1, title: 'Пицца', link: routers.products.pizza },
  { id: 2, title: 'Курица', link: routers.products.chicken },
  { id: 3, title: 'Салаты', link: routers.products.salad },
  { id: 4, title: 'Напитки', link: routers.products.drink },
  { id: 5, title: 'Соусы', link: routers.products.sauce },
  { id: 6, title: 'Контакты', link: routers.contacts },
];

const profileMenu = {
  history: '/profile/history',
  address: '/profile/address',
  user: '/profile/user',
};

const ROUTER_PATH = { ...routers, navbar, profileMenu };

export default ROUTER_PATH;
