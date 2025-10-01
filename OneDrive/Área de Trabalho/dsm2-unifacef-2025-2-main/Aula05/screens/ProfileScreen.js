import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.name}>João Silva</Text>
      <Ionicons name="settings" size={32} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  avatar: { width:140, height:140, borderRadius:70, marginBottom:12 },
  name: { fontSize:22, fontWeight:'bold', marginBottom:8 }
});
