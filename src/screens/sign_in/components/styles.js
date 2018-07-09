import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 200,
    paddingBottom: 0,

  },
  textInput: {
    height: 40,
    marginBottom: 2,
    color: '#fff',
    fontSize: 15,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    flex: 1,
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'auto',
    color: '#fff',
    fontSize: 12
  },
  button: {
    marginTop: 20,
    backgroundColor: '#158384',
    width: 250,
    height: 40,
    alignSelf: 'center'
  },
  btnText: {
    color: '#fff'
  }
});
export default styles;
