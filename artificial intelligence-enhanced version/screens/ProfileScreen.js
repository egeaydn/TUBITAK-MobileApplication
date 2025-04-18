import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { theme, toggleTheme } = useTheme();
  const { userInfo, logout } = useAuth();
  const [form, setForm] = useState({
    darkMode: theme.isDarkMode,
    emailNotifications: false,
    pushNotifications: false,
  });

  const handleDarkModeChange = (value) => {
    setForm(prev => ({ ...prev, darkMode: value }));
    toggleTheme();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.profile, { backgroundColor: theme.colors.card }]}>
        <View style={styles.profileAvatarWrapper}>
          <Image
            source={{ uri: 'https://source.unsplash.com/random/200x200/?person' }}
            style={styles.profileAvatar}
          />
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.profileAction}>
              <Ionicons color="#fff" name="pencil" size={15} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.profileName, { color: theme.colors.text }]}>
            {userInfo?.name || 'GAREMTAL Kullanıcısı'}
          </Text>
          <Text style={[styles.profileAddress, { color: theme.colors.textSecondary }]}>
            {userInfo?.address || 'İstanbul, Türkiye'}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>Tercihler</Text>
          
          <TouchableOpacity
            style={[styles.row, { backgroundColor: theme.colors.card }]}
          >
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <Ionicons color="#fff" name="globe" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Diller</Text>
            <View style={styles.rowSpacer} />
            <Ionicons
              color={theme.colors.textSecondary}
              name="chevron-forward"
              size={20}
            />
          </TouchableOpacity>
          
          <View style={[styles.row, { backgroundColor: theme.colors.card }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <Ionicons color="#fff" name="moon" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Karanlık Mod</Text>
            <View style={styles.rowSpacer} />
            <Switch
              onValueChange={handleDarkModeChange}
              value={form.darkMode}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={form.darkMode ? '#007afe' : '#f4f3f4'}
            />
          </View>
          
          <TouchableOpacity
            style={[styles.row, { backgroundColor: theme.colors.card }]}
          >
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <Ionicons color="#fff" name="location" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Konum</Text>
            <View style={styles.rowSpacer} />
            <Ionicons
              color={theme.colors.textSecondary}
              name="chevron-forward"
              size={20}
            />
          </TouchableOpacity>
          
          <View style={[styles.row, { backgroundColor: theme.colors.card }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <Ionicons color="#fff" name="notifications" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Bildirimler</Text>
            <View style={styles.rowSpacer} />
            <Switch
              onValueChange={pushNotifications =>
                setForm({ ...form, pushNotifications })
              }
              value={form.pushNotifications}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={form.pushNotifications ? '#007afe' : '#f4f3f4'}
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textSecondary }]}>Kaynaklar</Text>
          
          <TouchableOpacity
            style={[styles.row, { backgroundColor: theme.colors.card }]}
          >
            <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
              <Ionicons color="#fff" name="flag" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Hata Bildir</Text>
            <View style={styles.rowSpacer} />
            <Ionicons
              color={theme.colors.textSecondary}
              name="chevron-forward"
              size={20}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.row, { backgroundColor: theme.colors.card }]}
          >
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <Ionicons color="#fff" name="mail" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Bize Ulaşın</Text>
            <View style={styles.rowSpacer} />
            <Ionicons
              color={theme.colors.textSecondary}
              name="chevron-forward"
              size={20}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={logout}
            style={[styles.row, { backgroundColor: theme.colors.card }]}
          >
            <View style={[styles.rowIcon, { backgroundColor: '#ff3b30' }]}>
              <Ionicons color="#fff" name="log-out" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: theme.colors.text }]}>Çıkış Yap</Text>
            <View style={styles.rowSpacer} />
            <Ionicons
              color={theme.colors.textSecondary}
              name="chevron-forward"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
