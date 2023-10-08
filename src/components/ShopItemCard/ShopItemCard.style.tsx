import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginTop: 4,
    width: '100%',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  price: {
    marginTop: 2,
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
  },
  notInStock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
