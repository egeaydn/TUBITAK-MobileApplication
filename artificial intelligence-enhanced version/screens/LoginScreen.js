import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await login(username, password, 'student');
    } catch (error) {
      setErrorMessage(error.message || 'Giriş yapılırken bir hata oluştu');
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={[
        styles.container, 
        { backgroundColor: '#ffffff' } // Beyaz arka plan - Okul logosuna uygun
      ]}
    >
      <Animatable.Image
        animation="bounceIn"
        source={require('../assets/GaremtaPNG.png')}
        style={styles.logo}
      />

 

      <Animatable.View animation="fadeInUp" delay={500} style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="TC Numarası"
          keyboardType="numeric"
          maxLength={11}
          placeholderTextColor="gray"
          value={username}
          onChangeText={setUsername}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={700} style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry={true}
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
        />
      </Animatable.View>

      {errorMessage ? (
        <Animatable.Text animation="shake" style={styles.errorText}>
          {errorMessage}
        </Animatable.Text>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Yada</Text>
      <View style={styles.hr} />

      <View style={styles.createbutton}>
        <TouchableOpacity
          style={styles.create}
          onPress={() => navigation.navigate('Öğretmen')}
        >
          <Text style={styles.createText}>Öğretmen Girişi</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.copyrightcontainer}>
        <Text style={styles.copyright}>
          ©{new Date().getFullYear()} GAREMTAL. Tüm hakları saklıdır.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:""
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    borderColor: '#C9D3DB',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 16,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    fontSize: 15,
    color: '#222',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    width: '85%',
    height: 45,
    backgroundColor: '#075eec',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  or: {
    paddingTop: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
  hr: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: 340,
    marginVertical: 5,
    padding: 4,
    fontWeight: '900',
  },
  createbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    padding: 20,
  },
  create: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5BBCFF',
    borderRadius: 10,
    height: 40,
    width: 200,
    marginBottom: 15,
  },
  createText: {
    fontSize: 15,
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: '700',
    paddingHorizontal: 30,
  },
  copyrightcontainer: {
    position: 'absolute',
    bottom: 35,
  },
  copyright: {
    fontSize: 12,
    color: '#666',
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});
