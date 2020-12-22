import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background: ${(props) => props.theme.default.background.primary};
  border-radius: ${(props) => props.radius}% ${(props) => props.radius}px;
  padding: ${(props) => props.padding}px;
  margin-top: ${(props) => props.marginTop}px;

  flex-basis: calc(
    100% / ${(props) => props.column} - ${(props) => props.padding + props.gap} * 2px
  );

  box-shadow: 0 0 20px 5px ${(props) => props.theme.default.background.default};
  transition: 0.5s ease-out;

  &:hover {
    box-shadow: 0 0 20px 10px ${(props) => props.theme.default.background.hover};
  }
`;

CardStyle.propTypes = {
  radius: PropTypes.number,
  padding: PropTypes.number,
  marginTop: PropTypes.number,
  gap: PropTypes.number,
  column: PropTypes.number,
};

CardStyle.defaultProps = {
  radius: 30,
  padding: 25,
  marginTop: 40,
  gap: 15,
  column: 4,
};

export default CardStyle;
