import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import toRenderProps from 'recompose/toRenderProps';

import WestIcon from '@mui/icons-material/West';
import { IconButton } from '@mui/material';
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DefaultButton from '../../components/uielements/buttons/defaultButton';
import { payment } from '../../actions/stripe';

const stripePromise = loadStripe(
  'pk_test_51M9Da2CzEqaIGqKyEN9V2beZh1LYaZNEXUKOYdUTJ6wbrOAUUKU0EW8DY12zPDL2OO5o5kPuNWx0lTrGD8sqyndR009Y9RGnT5'
);

const Checkout = () => {
  const [pay, setPay] = useState(null);
  const navigate = useNavigate();
  const WithWidth = toRenderProps(withWidth());

  const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);

    stripe.createToken(cardElement).then((result) => {
      const sendData = {
        token: result.token.id,
        amount: pay,
      };
      payment(sendData);
    });
  };

  const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    return (
      <>
        <CardElement />
        <DefaultButton
          style={{ maxWidth: '28rem' }}
          onClick={handleSubmit(stripe, elements)}
        >
          Subscribe Now
        </DefaultButton>
      </>
    );
  };
  useEffect(() => {
    localStorage.getItem('level') === 'free'
      ? setPay(0)
      : localStorage.getItem('level') === 'pro'
      ? setPay(19)
      : setPay(59);
  }, []);
  const Description = (props) => {
    return props.width === 'lg' || props.width === 'xl' ? (
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem',
            gap: '0.5rem',
            marginLeft: '-2rem',
          }}
        >
          <IconButton
            onClick={() => navigate('/upgrade')}
            style={{ color: 'white' }}
          >
            <WestIcon />
          </IconButton>
          <div
            style={{
              padding: '0.375rem',
              background: 'white',
              borderRadius: '9999px',
              display: 'flex',
            }}
          >
            <img src="../heart.png" width={20} height={20} />
          </div>
        </div>
        <div
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          Subscribe to Senja Pro - Monthly
        </div>
        <div
          style={{
            alignItems: 'flex-end',
            display: 'flex',
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontWeight: 700,
            }}
          >
            ${pay}
            .00
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '0.25rem',
              marginLeft: '0.25rem',
            }}
          >
            /month
          </div>
        </div>
        <div style={{ display: 'block' }}>
          <div
            style={{
              justifyContent: 'space-between',
              display: 'flex',
              marginTop: '2rem',
            }}
          >
            <div>
              <div>Senja Pro - Monthly</div>
              <div
                style={{
                  fontSize: '.875rem',
                  lineHeight: '1.25rem',
                  color: 'rgb(255, 255, 255 /0.7)',
                }}
              >
                Billed Monthly
              </div>
            </div>
            <div>${pay}</div>
          </div>
          <div
            style={{
              justifyContent: 'space-between',
              display: 'flex',
              marginTop: '2rem',
            }}
          >
            <div>VAT (20%)</div>
            <div>${pay / 5}</div>
          </div>
          <hr style={{ borderColor: '#fff', marginTop: '2rem' }} />
          <div
            style={{
              justifyContent: 'space-between',
              display: 'flex',
              marginTop: '2rem',
            }}
          >
            <div>Total due today</div>
            <div>${(pay * 6) / 5}</div>
          </div>
          <div
            style={{
              fontSize: '.875rem',
              lineHeight: '1.25rem',
              gap: '0.25rem',
              alignItems: 'center',
              display: 'flex',
              marginTop: '7rem',
            }}
          >
            Powered by{' '}
            <img
              src="https://theme.zdassets.com/theme_assets/1561536/c0497b032cd66c6f8aa15ad713cf7bba60ad83ad.png"
              alt=""
              height="1rem"
            />
            <div
              style={{
                background: '#ffffff4d',
                width: '1px',
                height: '1rem',
                marginLeft: '0.5rem',
                marginRight: '0.5rem',
              }}
            ></div>
            <div
              style={{
                color: '#fff',
                fontSize: '.875rem',
                lineHeight: '1.25rem',
                gap: '0.5rem',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <a
                style={{ color: '#fff', textDecoration: 'unset' }}
                href="https://paddle.com/legal/checkout-buyer-terms/"
                target="_blank"
              >
                Terms
              </a>
              <a
                style={{ color: '#fff', textDecoration: 'unset' }}
                href="https://paddle.com/legal/privacy/"
                target="_blank"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem',
            gap: '0.5rem',
            color: 'white',
          }}
        >
          <IconButton
            onClick={() => navigate('/upgrade')}
            style={{ color: 'white' }}
          >
            <WestIcon />
          </IconButton>
          <div
            style={{
              padding: '0.375rem',
              background: 'white',
              borderRadius: '9999px',
              display: 'flex',
            }}
          >
            <img src="../heart.png" width={20} height={20} />
          </div>
        </div>
        <div
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            whiteSpace: 'nowrap',
          }}
        >
          Subscribe to Senja Pro - Monthly
        </div>
        <div
          style={{
            alignItems: 'flex-end',
            display: 'flex',
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontWeight: 700,
            }}
          >
            ${pay}
            .00
          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: '0.25rem',
              marginLeft: '0.25rem',
            }}
          >
            /month
          </div>
        </div>
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            marginTop: '2rem',
          }}
        >
          <div>
            <div>Senja Pro - Monthly</div>
            <div
              style={{
                fontSize: '.875rem',
                lineHeight: '1.25rem',
                color: 'rgb(255, 255, 255 /0.7)',
              }}
            >
              Billed Monthly
            </div>
          </div>
          <div>${pay}</div>
        </div>
        <div style={{ color: '#ffffffb3', marginTop: '0.5rem' }}>
          Includes ${pay / 5} VAT
        </div>
      </>
    );
  };

  const CardPay = (props) => {
    return props.width === 'lg' || props.width === 'xl' ? (
      <div
        style={{
          width: '100%',
          background: 'white',
          paddingTop: '5rem',
          paddingLeft: '5rem',
          paddingBottom: '5rem',
          paddingRight: '2rem',
        }}
      >
        <div
          style={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            maxWidth: '28rem',
            width: '100%',
            marginTop: '0.25rem',
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
            }}
          >
            Payment Details
          </h3>
          <div
            style={{
              fontSize: '.875rem',
              lineHeight: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            Complete your purchase by providing your payment information.
          </div>
        </div>
        <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    ) : (
      <div
        style={{
          width: '100%',
          background: 'white',
          paddingTop: '2rem',
          paddingLeft: '3rem',
          paddingBottom: '2rem',
          paddingRight: '3rem',
        }}
      >
        <div
          style={{
            paddingLeft: '1rem',
            paddingRight: '1rem',
            maxWidth: '28rem',
            width: '100%',
            marginTop: '0.25rem',
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
            }}
          >
            Payment Details
          </h3>
          <div
            style={{
              fontSize: '.875rem',
              lineHeight: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            Complete your purchase by providing your payment information.
          </div>
        </div>
        <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    );
  };

  return (
    <div style={{ height: '100vh' }}>
      <WithWidth>
        {({ width }) =>
          width === 'lg' || width === 'xl' ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
                height: '100%',
              }}
            >
              <div
                style={{ width: '100%', background: '#6701e6', color: 'white' }}
              >
                <div
                  style={{
                    paddingTop: '5rem',
                    paddingBotton: '5rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '5rem',
                  }}
                >
                  <div style={{ maxWidth: '26rem' }}>
                    <div style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
                      <Description width={width} />
                    </div>
                  </div>
                </div>
              </div>
              <CardPay width={width} />
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem', height: '100%' }}>
              <div
                style={{ width: '100%', background: '#6701e6', color: 'white' }}
              >
                <div
                  style={{
                    paddingTop: '3rem',
                    paddingBotton: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: '5rem',
                  }}
                >
                  <div style={{ maxWidth: '24rem' }}>
                    <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                      <Description />
                    </div>
                  </div>
                </div>
              </div>
              <CardPay />
            </div>
          )
        }
      </WithWidth>
    </div>
  );
};

export default Checkout;
