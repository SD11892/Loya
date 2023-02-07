import styled from 'styled-components';
import IconContainer from '../iconContainer';

const SiderButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: unset;
      webkit-justify-content: unset;
      text-align: left;
      color: #52525b;
      gap: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: unset;
      text-transform: unset;
    }
  }
`;
const MenuButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiToggleButton-root {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: unset;
      webkit-justify-content: unset;
      text-align: left;
      color: rgb(82, 82, 91);
      gap: 0.75rem;
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      letter-spacing: 0.02rem;
      border: unset;
      text-transform: unset;
    }
    &.MuiToggleButton-root:hover {
      background: #e4e4e7b3;
      border-radius: 6px;
    }
    &.MuiToggleButton-root:focus {
      background: #e4e4e7b3;
      border-radius: 6px;
    }
    &.MuiToggleButton-root.Mui-selected {
      border-radius: 6px;
      background: #e4e4e7b3;
    }
  }
`;
const MainButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      text-transform: unset;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition-duration: 0.1s;
      background: rgb(103, 1, 230);
      margin-left: 1rem;
      line-height: 24px;
      justify-content: unset;
      webkit-justify-content: unset;
      text-align: center;
      color: #fff;
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-weight: 600;
      font-size: 0.82rem;
      border-radius: 0.375rem;
    }
    &.MuiButton-text {
      justify-content: center;
    }
    &.MuiButton-root:hover {
      background: rgb(146, 50, 254);
    }
  }
`;
const PlusButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      background: rgb(103, 1, 230);
      color: white;
      border-radius: 0.25rem;
    }
    &.MuiButton-root:hover {
      background: rgb(146, 50, 254);
    }
  }
`;
const AddButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
    }
  }
`;
const EmbedButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      background: rgb(103, 1, 230);
      color: white;
      gap: 0.5rem;
      text-transform: unset;
      justify-content: space-between;
      border-radius: 0.25rem;
    }
  }
`;
const StatusButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      border: 1px solid transparent;
      text-transform: unset;
      font-size: 0.8rem;
      padding-bottom: 4px;
      padding-top: 4px;
      cursor: pointer;
      border-radius: 9999px;
    }
    &.MuiButton-root:hover {
      border: 1px solid #f59e0b00;
    }
  }
`;
const DeleteButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      margin-right: 1rem;
      padding: 8px;
      cursor: pointer;
      color: black;
      background: transparent;
      border: 1px solid #aaa;
      border-radius: 0.25rem;
    }
  }
`;
const BackwardButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      margin-right: 1rem;
      padding: 8px;
      cursor: pointer;
      color: #6b7280;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 0.25rem;
    }
    &.MuiButton-root:hover {
      background: #e7e5e4;
    }
  }
`;

const ListButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiListItemButton-root:hover {
      border-radius: 0.5rem;
     ${IconContainer} {
      visibility: visible;
    }
  }
`;

const DefaultButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButtonBase-root {
      margin-top: 1rem;
      width: 100%;
      background: ${(props) => (props.primary ? `${props.primary}` : 'black')};
      color: white;
      gap: 0.5rem;
      line-height: 1.5rem;
      text-transform: unset;
    }
    &.MuiButtonBase-root:hover {
      background: ${(props) => (props.primary ? `${props.primary}dd` : '#222')};
    }
    &.MuiButtonBase-root.Mui-disabled {
      background: #e4e4e7;
      color: #000;
    }
  }
`;

const UploadButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButtonBase-root {
      background: transparent;
      font-weight: 700;
      border: 0.1rem solid #ddd;
      color: black;
      margin-left: 1rem;
      margin-right: 1rem;
      text-transform: unset;
    }
  }
`;
const LinkButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButtonBase-root {
      border-radius: 9999px;
      background: #fff;
      line-height: 1.5rem;
      padding-top: 0.625rem;
      padding-bottom: 0.625rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    &.MuiButton-textPrimary {
      color: black;
      font-weight: 900;
      font-size: 1rem;
    }
  }
`;
const ImageButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButtonBase-root {
      transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
                font-family: inherit;
                font-size: 100%;
                font-weight: inherit;
                line-height: inherit;
                color: inherit;
  }
`;
const TabButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiToggleButton-root {
      padding: 4px;
    }
    &.MuiToggleButton-root.Mui-selected {
      background-color: #fff;
    }
  }
`;
const RecordButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      background: rgb(220, 38, 38);
      color: white;
      border-radius: 9999px;
      width: 3rem;
      min-width: 3rem;
      height: 3rem;
      margin: 0;
      padding: 0;
      border-style: solid;
      border-color: #e5e7eb;
      border-width: 3px;
      transition-duration: 0.15s;
    }
    &.MuiButton-root:hover {
      box-shadow: 0 20px 25px -5px rgb(185, 28, 28, 0.6);
      background: rgb(220, 38, 38);
      border-width: 2px;
    }
  }
`;
const WhiteRadiusButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      background: rgb(255, 255, 255);
      color: white;
      border-radius: 9999px;
      width: 3rem;
      min-width: 3rem;
      height: 3rem;
      margin: 0;
      padding: 0;
      border-style: solid;
      border-color: #e5e7eb;
      border-width: 3px;
      transition-duration: 0.15s;
    }
    &.MuiButton-root:hover {
      box-shadow: 0 20px 25px -5px rgb(185, 28, 28, 0.6);
      background: rgb(255, 255, 255);
    }
  }
`;
const NoteButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      color: white;
      background-color: rgb(41 37 36);
      border-radius: 9999px;
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      margin: 0;
      padding: 0.5rem;
      border-width: 0;
      border-style: solid;
      border-color: #e5e7eb;
      transition-duration: 0.1s;
    }
  }
`;

const EmbedToolButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiToggleButton-root {
      border: unset;
      color: white;
      font-size: 0.75rem;
      margin-right: 0.5rem;
    }
    &.MuiToggleButton-root.Mui-selected {
      background-color: rgb(75, 85, 99);
      border-radius: 0.5rem;
      color: white;
    }
    &.MuiToggleButton-root:hover {
      background-color: rgb(75, 85, 99);
      border-radius: 0.5rem;
      color: white;
    }
    &.MuiToggleButton-root:focus {
      background-color: rgb(75, 85, 99);
      border-radius: 0.5rem;
      color: white;
    }
  }
`;
export {
  SiderButton,
  MenuButton,
  MainButton,
  PlusButton,
  EmbedButton,
  StatusButton,
  DeleteButton,
  BackwardButton,
  ListButton,
  DefaultButton,
  UploadButton,
  LinkButton,
  AddButton,
  ImageButton,
  TabButton,
  RecordButton,
  NoteButton,
  WhiteRadiusButton,
  EmbedToolButton,
};
