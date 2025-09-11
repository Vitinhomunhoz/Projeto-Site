import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IMAGES = [
  'https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png',
  'https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png'
];


export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={28} color="black" />
        <Text style={styles.headerText}> Galeria </Text>
      </View>

      {IMAGES.map((uri, idx) => (
        <Image key={idx} source={{ uri }} style={styles.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems:'center', padding:16 },
  header: { flexDirection:'row', alignItems:'center', marginBottom:12 },
  headerText: { fontSize:18, marginLeft:8 },
  image: { width:320, height:200, borderRadius:8, marginVertical:8, resizeMode:'cover' }
});
