import styled from "styled-components";

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

export { ImageCard };
