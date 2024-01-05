import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang đăng nhập</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          placeholderTextColor="white" // Đổi màu chữ thành màu trắng
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          placeholderTextColor="white" // Đổi màu chữ thành màu trắng
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white' // Đổi màu chữ trong TextInput thành màu trắng
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});