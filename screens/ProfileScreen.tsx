// Ruta: screens/ProfileScreen.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';
const ProfileScreen = () => {
  // ⚠️ En el futuro esto vendrá del contexto o del login
  const { user } = useUser();
  if (!user) return null;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
        style={styles.avatar}
      />
      <Text style={styles.title}>Mi Perfil</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Alias</Text>
        <Text style={styles.value}>{user.username}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Contraseña</Text>
        <Text style={styles.value}>********</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#23294c',
  },
  infoBox: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
});

export default ProfileScreen;
