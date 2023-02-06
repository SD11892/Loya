import stripeService from '../services/stripe.service';

export const payment = (data) => {
  return stripeService.payment(data);
};
