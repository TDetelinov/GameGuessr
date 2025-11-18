import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../styles/homeStyles';

export default function HomeScreen({ navigation }) {
  // 🔹 Generem un array de 15 nivells (pots augmentar aquest número)
  const levels = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Game Guessr</Text>

      {/* Scroll per fer scroll amb molts nivells */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {levels.map((lvl) => (
          <TouchableOpacity
            key={lvl}
            style={styles.levelButton}
            onPress={() => navigation.navigate('Level', { level: lvl })}
          >
            <Text style={styles.levelText}>Level {lvl}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
