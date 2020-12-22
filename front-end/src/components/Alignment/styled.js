import styled from 'styled-components';
import PropTypes from 'prop-types';

const Alignment = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.positionX};
  align-items: ${(props) => props.positionY};
  > * {
    margin-right: ${(props) => props.gap}px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
Alignment.propTypes = {
  positionX: PropTypes.string,
  positionY: PropTypes.string,
  gap: PropTypes.number,
  direction: PropTypes.string,
};

Alignment.defaultProps = {
  positionX: 'center',
  positionY: 'center',
  gap: 15,
  direction: 'row',
};
export default Alignment;
