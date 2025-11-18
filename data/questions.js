// -----------------------------
// PREGUNTES DEL JOC GEO-GUESSR
// -----------------------------
// Pots afegir tantes preguntes com vulguis per cada nivell.
// Cada pregunta té un "question" i una ubicació correcta amb latitud i longitud.

export const levels = {
  1: [
    { question: 'On és Madrid?', answer: { latitude: 40.4168, longitude: -3.7038 } },
    { question: 'On és la Torre Eiffel?', answer: { latitude: 48.8584, longitude: 2.2945 } },
    { question: 'On és la Sagrada Família?', answer: { latitude: 41.4036, longitude: 2.1744 } },
    { question: 'On és el Coliseu de Roma?', answer: { latitude: 41.8902, longitude: 12.4922 } },
    { question: 'On és el Big Ben?', answer: { latitude: 51.5007, longitude: -0.1246 } },
  ],
  2: [
    { question: 'On és París?', answer: { latitude: 48.8566, longitude: 2.3522 } },
    { question: 'On és Lisboa?', answer: { latitude: 38.7169, longitude: -9.1399 } },
    { question: 'On és Berlín?', answer: { latitude: 52.5200, longitude: 13.4050 } },
    { question: 'On és Brussel·les?', answer: { latitude: 50.8503, longitude: 4.3517 } },
    { question: 'On és Praga?', answer: { latitude: 50.0755, longitude: 14.4378 } },
  ],
  3: [
    { question: 'On és Nova York?', answer: { latitude: 40.7128, longitude: -74.0060 } },
    { question: 'On és Tòquio?', answer: { latitude: 35.6762, longitude: 139.6503 } },
    { question: 'On és Buenos Aires?', answer: { latitude: -34.6037, longitude: -58.3816 } },
    { question: 'On és Sidney?', answer: { latitude: -33.8688, longitude: 151.2093 } },
    { question: 'On és el Caire?', answer: { latitude: 30.0444, longitude: 31.2357 } },
  ],
};