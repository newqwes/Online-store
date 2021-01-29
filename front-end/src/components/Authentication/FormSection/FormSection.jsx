import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Flex from '../../Flex';
import Label from '../../Label';
import Button from '../../Button';
import FieldList from './FieldList';
import InputField from '../InputField';

import { FormWrapper, FormContent } from './styled';

import THEME_VARIANT from '../../../constants/themeVariant';
import { ALIGN_ITEMS, JUSTIFY_CONTENT } from '../../../constants/position';

class FormSection extends React.Component {
  state = {
    isErrorAnimation: false,
  };

  onAnimationEnd = () => this.setState({ isErrorAnimation: false });

  handleClick = () => this.setState({ isErrorAnimation: true });

  static propTypes = {
    submit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    themeVariant: PropTypes.string,
    content: PropTypes.shape({
      title: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      link: PropTypes.shape({
        route: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          placeholder: PropTypes.string.isRequired,
        })
      ),
    }),
  };

  static defaultProps = {
    themeVariant: THEME_VARIANT.default,
  };

  render() {
    const {
      themeVariant,
      submit,
      handleSubmit,
      content: { title, buttonText, link, fields },
    } = this.props;
    const { isErrorAnimation } = this.state;

    return (
      <FormWrapper themeVariant={themeVariant}>
        <Flex alignItems={ALIGN_ITEMS.center}>
          <FormContent
            themeVariant={themeVariant}
            isErrorAnimation={isErrorAnimation}
            onAnimationEnd={this.onAnimationEnd}
          >
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Label text={title} />
            </Flex>
            <form onSubmit={handleSubmit(submit)}>
              <FieldList fields={fields} component={InputField} />
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

export default FormSection;
