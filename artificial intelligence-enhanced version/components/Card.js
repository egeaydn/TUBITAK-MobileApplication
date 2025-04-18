import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const Card = ({ item, index, onPress, theme }) => {
  return (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 200}
      duration={1000}
    >
      <TouchableOpacity 
        style={[styles.card, { backgroundColor: theme.colors.card }]}
        onPress={onPress}
        activeOpacity={0.95}
      >
        <Image 
          source={{ uri: item.imageUrl }}
          style={styles.cardImage}
          defaultSource={{ uri: 'https://source.unsplash.com/random/800x600/?school' }}
        />
        <View style={styles.cardOverlay} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Devamını Oku</Text>
            <Ionicons name="arrow-forward" size={18} color="#1A202C" />
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 32,
    height: 260,
    marginBottom: 24,
    borderRadius: 28,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    transform: [{ scale: 1 }],
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 28,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 28,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
    lineHeight: 32,
  },
  cardButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    alignSelf: 'flex-start',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardButtonText: {
    color: '#1A202C',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default Card;
