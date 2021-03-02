import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { getUserData } from '../selectors/userInfo';
import { telValidation, emailValidation, loginValidation } from '../utils/fieldValidation';

import { updateUser } from '../actionCreators';
import UserProfileForm from '../components/ProfileSection/UserProfileForm';

const validate = ({ phone, email, login }) => ({
  phone: telValidation(phone),
  email: emailValidation(email),
  login: loginValidation(login),
});

const withReduxForm = reduxForm({
  form: 'profileUser',
  validate,
  enableReinitialize: true,
});

const mapStateToProps = state => ({
  initialValues: getUserData(state),
});

const mapDispatchToProps = {
  updateUser,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReduxForm)(UserProfileForm);
