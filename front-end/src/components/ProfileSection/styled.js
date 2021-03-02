import styled from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const ProfileWrapper = styled.section.attrs(({ theme, themeVariant }) => ({
  backgroundColor: theme.profile.background.color[themeVariant],
}))`
  background-color: ${backgroundColor => backgroundColor};

  .profile__label {
    display: block;
    margin: 20px 0;
  }

  .profile__form-content {
    margin: 0 auto;
  }
`;

export const ProfileContent = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${SECTION_WIDTH.midle}px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const InputFieldContent = styled.div.attrs(
  ({ theme, themeVariant, disabled, pristine }) => ({
    inputBorder: theme.profile.input.border[themeVariant],
    editButtonColor: theme.profile.editButton.active[themeVariant],
    editButtonColorHover: theme.profile.editButton.hover[themeVariant],
    inputDisabledBackground: disabled && theme.profile.input.disabled.background[themeVariant],

    saveButtonColor: pristine
      ? theme.profile.saveButton.disabled[themeVariant]
      : theme.profile.saveButton.active[themeVariant],

    saveButtonColorHover: pristine
      ? theme.profile.saveButton.disabled[themeVariant]
      : theme.profile.saveButton.hover[themeVariant],
  }),
)`
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
    color: ${({ editButtonColor }) => editButtonColor};

    &:hover {
      color: ${({ editButtonColorHover }) => editButtonColorHover};
    }
  }

  .field-button-save {
    right: 12px;
    color: ${({ saveButtonColor }) => saveButtonColor};
    cursor: ${({ pristine }) => (pristine ? 'default' : 'pointer')};

    &:hover {
      color: ${({ saveButtonColorHover }) => saveButtonColorHover};
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
    border: 1px solid ${({ inputBorder }) => inputBorder};
    background-color: ${({ inputDisabledBackground }) => inputDisabledBackground};
    font-size: 16px;
    line-height: 20px;
  }
`;
