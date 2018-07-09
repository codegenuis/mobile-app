import { connect } from 'react-redux';

import Partnership from '../components/Partnership';

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error,
  countries: state.user.countries
});

const PartnershipLevel = connect(mapStateToProps)(Partnership);

export default PartnershipLevel;
