import styled from "styled-components";

const ButtonGroup = (ComponentName) => styled(ComponentName)`
   {
    &.MuiToggleButtonGroup-root {
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      .MuiToggleButtonGroup-grouped {
        border-radius: 6px !important;
      }
    }
    &.MuiToggleButtonGroup-grouped:not {
      border-bottom-right-radius: unset;
      border-top-right-radius: unset;
    }
  }
`;

export { ButtonGroup };
