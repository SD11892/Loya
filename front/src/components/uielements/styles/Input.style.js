import styled from "styled-components";

const FormInput = (ComponentName) => styled(ComponentName)`
   {
    &.MuiInputBase-root {
      .MuiInputBase-input {
        padding: 0.5rem 0.5rem;
        border: 0.15rem solid #ddd;
        border-radius: 0.375rem;
        justify-content: center;
      }
      .MuiInputBase-input:focus {
        border: 0.15rem solid #6701e6;
      }
    }
  }
`;

export { FormInput };
