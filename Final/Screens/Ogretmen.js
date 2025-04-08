import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // İkonlar için FontAwesome kullanıyoruz
import * as Animatable from 'react-native-animatable'; // Animasyonlar için ekliyoruz


export default function Login({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      let userFound = false;

      for (let user of users) 
      {
        if (user.phone === phone) 
        {
          if (user.password === password) 
          {
            setErrorMessage(''); // Hata mesajı G
            navigation.navigate('DrawerRoutes'); // Eğer herşey doğru çalışığ buraya kadar geldiyse artık giriş yapabilirsin G
            userFound = true;
            break;
          } 
          else
           {
            setErrorMessage('Şifre hatalı');
            userFound = true;
            break;
          }
        }
      }

      if (!userFound) {
        setErrorMessage('Telefon numarası yanlış');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/GaremtaPNG.png')} 
        style={styles.logo} 
      />
      
      <View style={styles.inputContainer}>
        <FontAwesome name="phone" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Telefon Numarası"
          keyboardType="phone-pad"
          maxLength={15}
          placeholderTextColor="gray"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry={true}
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {errorMessage ? ( //Error mesajını buraya tam iki texbox ın altına yazdım ve animasyonuda burada bulunuyor G
        <Animatable.Text animation="shake" style={styles.errorText}>{errorMessage}</Animatable.Text>
      ) : null} 

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      
      <Text style={styles.or}>Yada</Text>
      <View style={styles.hr} />

      <View style={styles.createbutton}>
        <TouchableOpacity style={styles.create} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createText}>Öğrenci Girişi</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.copyrightcontainer}>
         <Text style={styles.copyright}> ©{new Date().getFullYear()} GAREMTAL. Tüm hakları saklıdır.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({// Burasıda kodların Css Kısmıdır css kısmı biraz uzun kaldı sebebi giriş ekranın görüntüsüne önem verilmesidir bu kodu devralacak arkadaşıma 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf4',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
    resizeMode: 'contain',
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
    height: 45 ,
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
