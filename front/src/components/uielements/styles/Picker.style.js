import { styled } from '@mui/material/styles';

const Picker = (ComponentName) => styled(ComponentName)`
   {
    &.ColorPicker-MuiButtonBase-root {
      .ColorPicker-MuiButton-root {
        .ColorPicker-MuiInput-underline {
          &:before {
            border-bottom: 0;
          }
          &:hover:not(.Mui-disabled):before {
            border-bottom: 0;
          }
        }
        ColorPicker-MuiButton-contained {
          .ColorPicker-makeStyles-root-1 {
            .ColorPicker-makeStyles-root-3 div {
              border-radius: 1rem;
            }
          }
        }
      }
    }
    &.input.ColorPicker-MuiInputBase-input {
      .ColorPicker-MuiInput-input {
        color: #ff0;
        border: ;
      }
    }
  }
`;

export { Picker };
