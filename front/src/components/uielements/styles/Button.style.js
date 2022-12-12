import styled from "styled-components";
import IconContainer from "../iconContainer";

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
    }
  }
`;
const MenuButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
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
    }
    &.MuiButton-root:hover {
      background: #e4e4e7b3;
    }
    &.MuiButton-root:focus {
      background: #e4e4e7b3;
    }
  }
`;
const MainButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
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
  }
`;
const EmbedButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      background: rgb(103, 1, 230);
      color: white;
      border-radius: 0.25rem;
    }
  }
`;
const StatusButton = (ComponentName) => styled(ComponentName)`
   {
    &.MuiButton-root {
      cursor: pointer;
      border-radius: 1rem;
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
};
