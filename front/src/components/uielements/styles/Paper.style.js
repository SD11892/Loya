import styled from 'styled-components';

const ImageCard = (ComponentName) => styled(ComponentName)`
   {
    &.MuiPaper-root {
      .MuiPaper-elevation {
        width: 9rem;
        height: 9rem;
        float: left;
        padding: 0.5rem;
      }
    }
  }
`;

const WidgetCard = (ComponentName) => styled(ComponentName)`
   {
    &.MuiCard-root {
      box-shadow: ${(props) =>
        props.shadow === 'small'
          ? '0 1px 2px 0 rgb(0, 0, 0 / 0.05)'
          : props.shadow === 'medium'
          ? '0 1px 3px 0 rgb(0, 0, 0 / 0.1), 0 1px 2px -1px rgb(0, 0, 0 / 0.1)'
          : props.shadow === 'large'
          ? '0 4px 6px -1px rgb(0, 0, 0 / 0.1), 0 2px 4px -2px rgb(0, 0, 0 / 0.1)'
          : props.shadow === 'extra large'
          ? '0 10px 15px -3px rgb(0, 0, 0 / 0.1), 0 4px 6px -4px rgb(0, 0, 0 / 0.1)'
          : 'unset'};
      width: 20rem;
      padding: 1rem;
      height: min-content;
      background: ${(props) => props.bgColor};
      color: ${(props) => props.txtColor};
      border-radius: ${(props) =>
        props.radius === 'small'
          ? '0.375rem'
          : props.radius === 'medium'
          ? '0.5rem'
          : props.radius === 'large'
          ? '0.75rem'
          : props.radius === 'extra large'
          ? '1rem'
          : 'unset'};
    }
  }
`;

const PaymentCard = (ComponentName) => styled(ComponentName)`
   {
    &.MuiPaper-root {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      border-width: 1px;
      border-radius: 1rem;
    }
  }
`;

export { ImageCard, WidgetCard, PaymentCard };
