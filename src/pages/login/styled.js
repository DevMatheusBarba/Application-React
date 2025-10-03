import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};

  small {
    font-size: 12pt;
    color: #999;
    margin-left: 15px;
  }
`;
