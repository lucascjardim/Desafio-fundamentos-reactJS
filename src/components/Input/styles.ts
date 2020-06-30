import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    height: 60px;
    width: 700px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
