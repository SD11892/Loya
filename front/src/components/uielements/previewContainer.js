import styled from "styled-components";

const PreviewContainer = styled.div`
   {
    width: 32rem;
    display: flex;
    flex-direction: column;
    align-self: center;
    box-sizing: border-box;
    border-width: 0.1rem;
    border-style: solid;
    border-color: #e5e7eb;
    padding: 1rem;
    border-radius: 1rem;
    z-index: 999;
    background: #fff;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 20px 25px -5pxrgb (0 0 0 / 0.1),
      0 8px 10px -6pxrgb (0 0 0 / 0.1);
  }
`;

export default PreviewContainer;
