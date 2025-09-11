import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Aula 05 - Imagens e Ícones</Text>
      <View style={styles.btn}>
        <Button title="Abrir Perfil" onPress={() => navigation.navigate('Profile')} />
      </View>
      <View style={styles.btn}>
        <Button title="Abrir Galeria" onPress={() => navigation.navigate('Gallery')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  logo: { width:120, height:120, resizeMode:'contain', marginBottom:20 },
  title: { fontSize:18, marginBottom:20 },
  btn: { width:'60%', marginVertical:8 }
});
