import styled, { css } from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const ProfileWrapper = styled.section(
  ({
    theme: { profile },
    themeVariant,
    backgroundColor = profile.background.color[themeVariant],
  }) => css`
    background-color: ${backgroundColor};

    .profile-label {
      display: block;
      margin: 20px 0;
    }

    .profile-form-content {
      margin: 0 auto;
    }
  `,
);

export const ProfileContent = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${SECTION_WIDTH.midle}px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const InputFieldContent = styled.div(
  ({
    theme: { profile },
    themeVariant,
    disabled,
    pristine,

    editButtonColor = profile.editButton.active[themeVariant],
    editButtonColorHover = profile.editButton.hover[themeVariant],

    saveButtonColor = pristine
      ? profile.saveButton.disabled[themeVariant]
      : profile.saveButton.active[themeVariant],

    saveButtonColorHover = pristine
      ? profile.saveButton.disabled[themeVariant]
      : profile.saveButton.hover[themeVariant],

    inputBorderColor = profile.input.border[themeVariant],

    inputDisabledBackgroundColor = disabled && profile.input.disabled.background[themeVariant],
  }) => css`
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    .field-button-cancel,
    .field-button-edit,
    .field-button-save {
      position: absolute;
      font-size: 14px;
      cursor: pointer;
      transition: 0.3s ease;
      bottom: 25px;
    }

    .field-button-cancel,
    .field-button-edit {
      color: ${editButtonColor};

      &:hover {
        color: ${editButtonColorHover};
      }
    }

    .field-button-save {
      right: 12px;
      color: ${saveButtonColor};
      cursor: ${pristine ? 'default' : 'pointer'};

      &:hover {
        color: ${saveButtonColorHover};
      }
    }

    .field-button-edit {
      right: 12px;
    }

    .field-button-cancel {
      right: -60px;
    }

    .input-wrapper {
      position: relative;
    }

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
