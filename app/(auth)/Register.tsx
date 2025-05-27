import { register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationFn: () => register({ username, password }),
    onSuccess: () => {
      router.replace("/(protected)/(tabs)/Home");
    },
  });

  const handleRegister = async () => {
    mutate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.login}>
        Already have an account?{" "}
        <Link style={styles.link} href="/(auth)/Login">
          Login
        </Link>
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#d1d1d1",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  login: {
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "center",
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
