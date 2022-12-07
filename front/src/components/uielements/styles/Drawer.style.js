import styled from "styled-components";

const SideDrawer = (ComponentName) => styled(ComponentName)`
   {
    &.MuiDrawer-root {
      margin-right: 2.5rem;
      border-color: rgb(244 244 245);
      box-shadow: rgb(0 0 0 / 5%) -20px 0px;
      .MuiPaper-root {
        --tw-bg-opacity: 1;
        background-color: rgb(250 250 250 / var(--tw-bg-opacity));
        display: flex;
        flex-direction: column;
        height: 100%;
        width: inherit;
        z-index: 1000;
        padding-left: 1rem;
        padding-right: 1rem;
        margin-right: 2.5rem;
        border-color: rgb(244 244 245);
        box-shadow: rgb(0 0 0 / 5%) -20px 0px;
      }
    }
  }
`;

export { SideDrawer };
