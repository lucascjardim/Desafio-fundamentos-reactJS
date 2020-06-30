import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 210px;
  height: 60px;
  background: #5636d3;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#5636d3')};
  }
`;
