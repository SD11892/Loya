import styled from 'styled-components';

const FormInput = (ComponentName) => styled(ComponentName)`
   {
    &.MuiInputBase-root {
      width: 100%;
      padding-right: 1rem;
      .MuiInputBase-input {
        padding: 0.5rem 0.5rem;
        border: 1px solid rgb(209 213 219);
        border-radius: 0.375rem;
        justify-content: center;
      }
      .MuiInputBase-input:focus {
        border: 1px solid #6701e6;
      }
    }
  }
`;

export { FormInput };
