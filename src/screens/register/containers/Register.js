import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import { createUser, fetchCountries } from '../../../api';

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error,
  countries: state.user.countries
});

const connectedRegisterPage = connect(
  mapStateToProps,
  { createUser, fetchCountries }
)(RegisterForm);

export default connectedRegisterPage;
