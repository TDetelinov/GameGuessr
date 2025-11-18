import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f0ff',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Righteous_400Regular',
    color: '#3A0CA3',
  },
  subtitle: {
    fontSize: 22,
    marginTop: 5,
    marginBottom: 50,
    fontFamily: 'Righteous_400Regular',
  },
  resultsBox: {
    width: '85%',
    maxHeight: 260,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#3A0CA3',
  },
  resultLine: {
    fontSize: 22,
    marginVertical: 20,
    fontFamily: 'Righteous_400Regular',
  },
  totalScore: {
    fontSize: 26,
    color: '#D90429',
    marginVertical: 20,
    fontFamily: 'Righteous_400Regular',
  },
  button: {
    backgroundColor: '#3A0CA3',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Righteous_400Regular',
  },
    recordText: {
    fontSize: 26,
    color: '#3A0CA3',
    marginBottom: 20,
    fontFamily: 'Righteous_400Regular',
  },

});
