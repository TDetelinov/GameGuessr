import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f6f0ff',
    paddingTop: 60,
  },
  logo: {
    width: 280,
    height: 280,
    marginBottom: 10,
    marginTop: 70,
  },
  title: {
    fontSize: 42,
    color: '#3A0CA3',
    marginBottom: 20,
    fontFamily: 'Righteous_400Regular',
  },
  // 🔹 Contenidor scrollable
  scrollContainer: {
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  levelButton: {
    backgroundColor: '#3A0CA3',
    paddingVertical: 22,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginVertical: 8,
  },
  levelText: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Righteous_400Regular',
  },
});
