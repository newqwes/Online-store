const orderMessage = ({ cart, customer }) => {
  // TODO beautiful view incomming email
  const html = `
  <h2>Новый заказ</h2>
    <div>
      <h3>1</h3>
      Cart: ${JSON.stringify(cart)}
    </div>
    <div>
      <h3>2</h3>
      Customer: ${JSON.stringify(customer)}
    </div>
  `;

  return { html };
};

export default orderMessage;
