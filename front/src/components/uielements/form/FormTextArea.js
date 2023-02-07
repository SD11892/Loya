import styled from 'styled-components';

const FormTextArea = styled.textarea`
  border: 1px solid rgb(209, 213, 219);
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  &:hover {
    border: 1px solid #6701e6;
  }
  &:focus-visible {
    outline: #6701e6 auto 1px;
  }
`;

export default FormTextArea;
