import styled from "styled-components";

const FormGrid = (ComponentName) => styled(ComponentName)`
   {
    &.MuiGrid-root {
      padding: 0.2rem 1.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export { FormGrid };
