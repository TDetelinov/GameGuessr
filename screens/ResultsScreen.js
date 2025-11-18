import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/resultsStyles';

// Firebase
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function ResultsScreen({ route, navigation }) {
  const { level, scoreList } = route.params;

  const total = scoreList.reduce((a, b) => a + b, 0);

  const [record, setRecord] = useState(null); // 🔥 Rècord del nivell

  // -------------------------------------------------------------
  // 🔥 Guardar partida i actualitzar rècord
  // -------------------------------------------------------------
  const saveGameResult = async () => {
    try {
      const timestamp = Date.now().toString();

      // Desa la partida completa
      await setDoc(doc(db, "games", timestamp), {
        level: level,
        scores: scoreList,
        total: total,
        date: new Date().toISOString(),
      });

      // Comprovar i actualitzar rècord
      const recordRef = doc(db, "records", "level" + level);
      const existing = await getDoc(recordRef);

      let bestScore = null;

      if (!existing.exists()) {
        // Si no existeix → crear-lo
        await setDoc(recordRef, {
          best: total,
          date: new Date().toISOString(),
        });
        bestScore = total;
      } else {
        bestScore = existing.data().best;
        if (total > bestScore) {
          await setDoc(recordRef, {
            best: total,
            date: new Date().toISOString(),
          });
          bestScore = total;
        }
      }

      // Guarda el rècord al state
      setRecord(bestScore);

      console.log("✔ Resultats guardats i rècord actualitzat!");

    } catch (error) {
      console.log("❌ Error guardant al Firebase:", error);
    }
  };

  // Carregar i guardar quan la pantalla s’inicialitza
  useEffect(() => {
    saveGameResult();
  }, []);

  // -------------------------------------------------------------

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultats Finals</Text>
      <Text style={styles.subtitle}>Nivell {level}</Text>

      {/* Requadre scrolleable amb els resultats */}
      <View style={styles.resultsBox}>
        <ScrollView>
          {scoreList.map((score, index) => (
            <Text key={index} style={styles.resultLine}>
              Pregunta {index + 1}: {score} pts
            </Text>
          ))}
        </ScrollView>
      </View>

      {/* Puntuació total */}
      <Text style={styles.totalScore}>Puntuació total: {total} pts</Text>

      {/* 🔥 Mostrar rècord */}
      {record !== null && (
        <Text style={styles.recordText}>Rècord del nivell: {record} pts</Text>
      )}

      {/* 🔙 Botó Back (per dispositius sense botó físic) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
