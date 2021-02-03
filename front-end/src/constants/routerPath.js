const routers = {
  products: {
    main: '/products',
    pizza: '/products?type=pizza',
    chicken: '/products?type=chicken',
    salad: '/products?type=salad',
    drink: '/products?type=drink',
    sauce: '/products?type=sauce',
  },
  contacts: '/contacts',
  order: '/order',
  orderSubmit: '/order_submit',
  login: '/login',
  registration: '/registration',
  main: '/',
};

const navbar = [
  { id: 1, title: 'Пицца', link: routers.products.pizza },
  { id: 2, title: 'Курица', link: routers.products.chicken },
  { id: 3, title: 'Салаты', link: routers.products.salad },
  { id: 4, title: 'Напитки', link: routers.products.drink },
  { id: 5, title: 'Соусы', link: routers.products.sauce },
  { id: 6, title: 'Контакты', link: routers.contacts },
];

const ROUTER_PATH = { ...routers, navbar };

export default ROUTER_PATH;
