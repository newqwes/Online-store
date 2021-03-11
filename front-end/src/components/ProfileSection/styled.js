import styled, { css } from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const ProfileWrapper = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${SECTION_WIDTH.midle}px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const ProfileContent = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputFieldContent = styled.div(
  ({
    theme: { profile },
    themeVariant,
    disabled,

    inputBorderColor = profile.input.border[themeVariant],

    inputDisabledBackgroundColor = disabled && profile.input.disabled.background[themeVariant],
  }) => css`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    position: relative;

    input {
      margin: 10px 0;
      min-width: 350px;
      outline: none;
      box-shadow: none;
      box-sizing: border-box;
      height: 46px;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid ${inputBorderColor};
      background-color: ${inputDisabledBackgroundColor};
      font-size: 16px;
      line-height: 20px;
    }
  `,
);
