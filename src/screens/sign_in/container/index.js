import { connect } from 'react-redux';

import SignIn from '../components/SignIn';
import { signIn } from '../../../api';

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error
});

const SignInPage = connect(
  mapStateToProps,
  { signIn }
)(SignIn);

export default SignInPage;
