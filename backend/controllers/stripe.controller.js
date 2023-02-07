const Stripe = require('stripe');

const stripe = Stripe(
  'sk_test_51M9Da2CzEqaIGqKyMivF0dPB51xgknGfbh8AE63o7Xl6aedUYo1PfeNudVRcBga79sEx7SLoRuM59GcoF1EzT4D700Ttpwx7Uu'
);
const payment = async (req, res) => {
  const data = req.query;
  let price = '';
  switch (Number(data.data.amount)) {
    case 0:
      price = 'price_1MQwSaCzEqaIGqKymtg375nP';
      break;
    case 19:
      price = 'price_1MPPlMCzEqaIGqKySYL7XofU';
      break;
    case 59:
      price = 'price_1MPPlMCzEqaIGqKyX0Hjaqnh';
      break;
  }

  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      token: data.data.token,
    },
  });

  const customer = await stripe.customers.create({
    description: 'New Customer',
  });

  try {
    await stripe.paymentMethods.attach(paymentMethod.id, {
      customer: customer.id,
    });
  } catch (error) {
    return res.status('402').send({ error: { message: error.message } });
  }
  let updateCustomerDefaultPaymentMethod = await stripe.customers.update(
    customer.id,
    {
      invoice_settings: {
        default_payment_method: paymentMethod.id,
      },
    }
  );
  console.log(price);
  stripe.subscriptions.create(
    {
      customer: customer.id,
      items: [{ price: price }],
    },
    (err, result) => {
      if (err) console.log('error===============================', err);
      res.json({ code: 200, data: result, message: 'success' });
    }
  );
};
module.exports = { payment };
