import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60,
    paddingBottom: 0,

  },
  textInput: {
    height: 40,
    marginBottom: 2,
    color: '#222222',
    fontSize: 15,
    borderBottomColor: '#222222',
    borderBottomWidth: 2,
    flex: 1,
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    height: 40,
    marginBottom: 10,
    color: '#222222',
    fontSize: 20
  },
  view: {
    width: 40, height: 50, marginRight: 10
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
