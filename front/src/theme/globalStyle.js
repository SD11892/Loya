import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji",Segoe UI Symbol;
    height:100%;
    overflow:hidden;
  }
  label {
    display: block;
  }
  
  .card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
  }
  
  .card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  .react-player {
    height: fit-content !important;
    width: fit-content !important;
  }
  .react-player video {
    height:10rem !important;
    width: unset !important;
    border-radius: 1rem;
  }
  .react-player-big {
    height: fit-content !important;
    width: fit-content !important;
  }
  .react-player-big video {
    height:unset !important;
    width: 24rem !important;
    border-radius: 0.375rem;
  }
  .profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .StripeElement,
.StripeElementIdeal,
.StripeElementP24,
.StripeElementEPS,
.StripeElementFpx {
  display: block;
  margin: 10px 0 20px 0;
  max-width: 500px;
  padding: 10px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border-radius: 4px;
  background: white;
}

.StripeElement--focus,
.StripeElementIdeal--focus,
.StripeElementP24--focus,
.StripeElementEPS--focus,
.StripeElementFpx--focus {
  box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
    rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
}

.StripeElement.loading {
  height: 41.6px;
  opacity: 0.6;
}

.StripeElementIdeal,
.StripeElementP24,
.StripeElementEPS,
.StripeElementFpx {
  padding: 0;
}
`;
export default GlobalStyle;
