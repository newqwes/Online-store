import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import Flex from '../../Flex';
import Label from '../../Label';
import Button from '../../Button';
import InputField from '../InputField';

import { FormWrapper, FormContent } from './styled';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

class FormSection extends React.Component {
  state = {
    isErrorAnimation: false,
  };

  onAnimationEnd = () => this.setState({ isErrorAnimation: false });

  handleClick = () => this.setState({ isErrorAnimation: true });

  render() {
    const {
      themeVariant,
      submit,
      handleSubmit,
      content: { label, buttonText, link, fields },
    } = this.props;

    const { isErrorAnimation } = this.state;

    const mapFields = fields.map(({ text, name, type }) => (
      <Field key={text} name={name} type={type} component={InputField} label={text} />
    ));

    const onSubmit = handleSubmit(submit);

    return (
      <FormWrapper themeVariant={themeVariant}>
        <Flex justifyContent={JUSTIFY_CONTENT.center}>
          <FormContent
            themeVariant={themeVariant}
            isErrorAnimation={isErrorAnimation}
            onAnimationEnd={this.onAnimationEnd}
          >
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Label text={label} />
            </Flex>
            <form onSubmit={onSubmit}>
              {mapFields}
              <Button text={buttonText} onClick={this.handleClick} />
              <Flex justifyContent={JUSTIFY_CONTENT.center}>
                <NavLink to={link.route}>{link.text}</NavLink>
              </Flex>
            </form>
          </FormContent>
        </Flex>
      </FormWrapper>
    );
  }
}

FormSection.propTypes = {
  submit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  themeVariant: PropTypes.string,
  content: PropTypes.shape({
    label: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.shape({
      route: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  }),
};

FormSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default FormSection;
