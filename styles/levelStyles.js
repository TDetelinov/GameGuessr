import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f0ff',
    alignItems: 'center',
    paddingTop: 100,
  },
  subtitle: {
    fontSize: 30,
    fontFamily: 'Righteous_400Regular',
    marginBottom: 20,
  },
  question: {
    fontSize: 28,
    fontFamily: 'Righteous_400Regular',
    color: '#D90429',
    marginBottom: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  map: {
    width: '92%',
    height: 270,
    borderRadius: 15,
    marginBottom: 50,
  },
  infoText: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Righteous_400Regular',
    color: '#555',
  },
  button: {
    backgroundColor: '#3A0CA3',
    paddingVertical: 16,
    paddingHorizontal: 45,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Righteous_400Regular',
  },
  resultText: {
    fontSize: 30,
    color: '#D90429',
    marginTop: 10,
    fontFamily: 'Righteous_400Regular',
  },
  distanceText: {
    fontSize: 22,
    marginBottom: 8,
    fontFamily: 'Righteous_400Regular',
  },
});
