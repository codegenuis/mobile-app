import { fetchCountries } from '../screens/register';

const countries = () => dispatch => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(response => {
      dispatch(fetchCountries(response));
    });
};

export default countries;
