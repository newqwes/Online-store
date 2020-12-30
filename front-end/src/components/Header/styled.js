import styled from 'styled-components';
import WrapperStyle from '../../style/WrapperStyle';

export const HeaderStyle = styled.header`
  background: ${(props) => props.theme.background.primary};
  height: 100px;
  display: flex;
`;

export const HeaderWrapper = styled(WrapperStyle)`
  display: flex;
  justify-content: space-between;

  > * {
    width: 100%;
  }
`;
