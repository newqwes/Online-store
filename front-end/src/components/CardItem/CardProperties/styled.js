import styled from 'styled-components';

const CardPropertiesStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:last-child {
    margin-top: auto;
  }
  > * {
    display: flex;
    margin: 15px 5px;
  }
`;

export default CardPropertiesStyle;
