// /styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  map: {
    width: '100%',
    height: '70%',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default styles;