import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userType, setUserType] = useState(null); // 'student' or 'teacher'
  const [loading, setLoading] = useState(true);

  // Initialize the auth state from AsyncStorage
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        const userDetails = await AsyncStorage.getItem('userInfo');
        const storedUserType = await AsyncStorage.getItem('userType');
        
        if (userToken && userDetails) {
          setIsLoggedIn(true);
          setUserInfo(JSON.parse(userDetails));
          setUserType(storedUserType);
        }
      } catch (e) {
        console.error('Failed to restore authentication state:', e);
      } finally {
        setLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  // Login function
  const login = async (username, password, type) => {
    try {
      // In a real app, you'd make an API call here
      // For demo purposes, we're just going to check the credentials locally
      let user;
      
      if (type === 'student') {
        // Some basic validation
        if (username.length !== 11 || isNaN(username)) {
          throw new Error('TC Numarası 11 rakamdan oluşmalıdır');
        }
        
        if (password.length < 4) {
          throw new Error('Şifre en az 4 karakter olmalıdır');
        }
        
        // Create a mock student user
        user = {
          id: '1',
          name: 'Öğrenci Kullanıcı',
          username: username,
          class: '9',
          section: 'A',
          studentNumber: '123',
          address: 'İstanbul, Türkiye'
        };
      } else if (type === 'teacher') {
        // Create a mock teacher user
        user = {
          id: '101',
          name: 'Öğretmen Kullanıcı',
          phone: username,
          department: 'Matematik',
          address: 'İstanbul, Türkiye'
        };
      } else {
        throw new Error('Geçersiz kullanıcı tipi');
      }
      
      // Store auth info in AsyncStorage
      await AsyncStorage.setItem('userToken', 'dummy-auth-token');
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      await AsyncStorage.setItem('userType', type);
      
      setIsLoggedIn(true);
      setUserInfo(user);
      setUserType(type);
      
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Clear auth info from AsyncStorage
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userInfo');
      await AsyncStorage.removeItem('userType');
      
      setIsLoggedIn(false);
      setUserInfo(null);
      setUserType(null);
    } catch (e) {
      console.error('Logout error:', e);
    }
  };

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn,
        userInfo,
        userType,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
