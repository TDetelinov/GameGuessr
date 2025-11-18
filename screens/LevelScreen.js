import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import haversine from 'haversine';
import styles from '../styles/levelStyles';
import { levels } from '../data/questions'; // Preguntes modularitzades

export default function LevelScreen({ route, navigation }) {
  const { level } = route.params;
  const questions = levels[level];

  const [current, setCurrent] = useState(0);
  const [marker, setMarker] = useState(null); // marcador del jugador
  const [correctMarker, setCorrectMarker] = useState(null); // marcador correcte (verd)
  const [result, setResult] = useState(null);
  const [scoreList, setScoreList] = useState([]);

  // Calcula la distància i la puntuació
  const calculateScore = () => {
    if (!marker) return;
    const correct = questions[current].answer;

    // Calcular distància (en km)
    const distance = haversine(marker, correct, { unit: 'km' });

    // Puntuació (més proper → més punts)
    const score = Math.max(0, Math.round(5000 - distance * 20));

    setResult({ distance: distance.toFixed(0), score });
    setCorrectMarker(correct); // mostra el pin verd

    // Desa puntuació
    const updatedScores = [...scoreList];
    updatedScores[current] = score;
    setScoreList(updatedScores);
  };

  // Passar a la següent pregunta
  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setMarker(null);
      setCorrectMarker(null);
      setResult(null);
    } else {
      navigation.navigate('Results', { level, scoreList });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        LEVEL {level}: Pregunta {current + 1}/{questions.length}
      </Text>

      <Text style={styles.question}>{questions[current].question}</Text>

      <MapView
        provider={PROVIDER_GOOGLE}
        mapType="satellite" // 🌍 Mode satèl·lit activat
        style={styles.map}
        initialRegion={{
          latitude: 41.3851,
          longitude: 2.1734,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        onLongPress={(e) => setMarker(e.nativeEvent.coordinate)}
      >
        {/* 🔴 Marcador del jugador */}
        {marker && (
          <Marker
            coordinate={marker}
            pinColor="red"
            title="La teva elecció"
          />
        )}

        {/* 🟢 Marcador correcte (només després del Guess) */}
        {correctMarker && (
          <Marker
            coordinate={correctMarker}
            pinColor="green"
            title="Ubicació correcta"
          />
        )}

        {/* 🔷 Línia entre punts (només si existeixen els dos) */}
        {marker && correctMarker && (
          <Polyline
            coordinates={[marker, correctMarker]}
            strokeColor="#00BFFF"
            strokeWidth={3}
          />
        )}
      </MapView>

      <Text style={styles.infoText}>Manteniu premut per posar un ping</Text>

      {!result ? (
        <TouchableOpacity style={styles.button} onPress={calculateScore}>
          <Text style={styles.buttonText}>Guess</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Text style={styles.resultText}>{result.score} / 5000 pts</Text>
          <Text style={styles.distanceText}>Distància: {result.distance} km</Text>
          <TouchableOpacity style={styles.button} onPress={nextQuestion}>
            <Text style={styles.buttonText}>
              {current < questions.length - 1 ? 'Next' : 'Finalitzar'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
