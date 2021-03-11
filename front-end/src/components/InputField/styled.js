import styled, { css } from 'styled-components';

const sharedStyle = css`
  position: absolute;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
  bottom: 25px;
`;

export const Edit = styled.span(
  ({
    theme: { control },
    themeVariant,
    editButtonColor = control.editButton.active[themeVariant],
    editButtonColorHover = control.editButton.hover[themeVariant],
  }) => css`
    ${sharedStyle};
    color: ${editButtonColor};
    right: 12px;

    &:hover {
      color: ${editButtonColorHover};
    }
  `,
);

export const Save = styled.span(
  ({
    theme: { control },
    themeVariant,
    pristine,
    saveButtonColor = pristine
      ? control.saveButton.disabled[themeVariant]
      : control.saveButton.active[themeVariant],
    saveButtonColorHover = pristine
      ? control.saveButton.disabled[themeVariant]
      : control.saveButton.hover[themeVariant],
  }) => css`
    ${sharedStyle};
    right: 12px;
    color: ${saveButtonColor};
    cursor: ${pristine ? 'default' : 'pointer'};

    &:hover {
      color: ${saveButtonColorHover};
    }
  `,
);

export const Cancel = styled.span(
  ({
    theme: { control },
    themeVariant,
    editButtonColor = control.editButton.active[themeVariant],
    editButtonColorHover = control.editButton.hover[themeVariant],
  }) => css`
    ${sharedStyle};
    right: -60px;
    color: ${editButtonColor};

    &:hover {
      color: ${editButtonColorHover};
    }
  `,
);
