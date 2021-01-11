import styled, { css } from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background: ${(props) => props.theme.cardItem.background[props.themeVariant]};
  border-radius: ${(props) => props.radius}% ${(props) => props.radius}px;
  padding: 25px;
  margin-top: 40px;

  flex-basis: calc(
    100% / ${(props) => props.quantityСolumn} - ${(props) => 25 + props.indent} * 2px
  );

  box-shadow: 0 0 20px 5px ${(props) => props.theme.cardItem.shadow[props.themeVariant]};
  transition: 0.5s ease-out;

  &:hover {
    box-shadow: 0 0 20px 10px ${(props) => props.theme.cardItem.hoverShadow[props.themeVariant]};
  }
`;

export const shareStylesButton = css`
  padding: 5px 15px;
  font-size: 13px;
  background-color: #a11b48ff;
  border: 2px solid #a11b48;
  margin-left: 10px;
`;

export default CardStyle;
