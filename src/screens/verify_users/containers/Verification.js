import { connect } from 'react-redux';

import VerificationForm from '../components/VerificationForm';
import { verification } from '../../../api';

const mapStateToProps = state => ({
  loading: state.verify.loading,
  error: state.verify.error,
});

const verificationPage = connect(mapStateToProps, { verification })(VerificationForm);
export default verificationPage;
