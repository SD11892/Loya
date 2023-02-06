const Stripe = require('stripe');

const stripe = Stripe(
  'sk_test_51M9Da2CzEqaIGqKyMivF0dPB51xgknGfbh8AE63o7Xl6aedUYo1PfeNudVRcBga79sEx7SLoRuM59GcoF1EzT4D700Ttpwx7Uu'
);
const payment = async (req, res) => {
  const data = req.query;

  const paymentMethod = await stripe.paymentMethods.create({
    type: 'card',
    card: {
      token: data.data.token,
    },
  });

  const customer = await stripe.customers.create({
    description: 'New Customer',
  });

  console.log(data);
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

  stripe.subscriptions.create(
    {
      customer: customer.id,
      items: [{ price: 'price_1MPPlMCzEqaIGqKySYL7XofU' }],
    },
    (err, result) => {
      if (err) console.log('error===============================', err);
      console.log(result);
    }
  );
};
module.exports = { payment };
