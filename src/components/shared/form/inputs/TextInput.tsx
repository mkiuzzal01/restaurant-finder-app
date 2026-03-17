"use client";
import React, { forwardRef, useState } from "react";
import {
  Controller,
  useFormContext,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface TextInputProps<T extends FieldValues>
  extends Omit<RNTextInputProps, "name"> {
  name: Path<T>;
  label?: string;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  containerStyle?: object;
  inputStyle?: object;
}

const TextInput = forwardRef<RNTextInput, TextInputProps<any>>(
  ({ name, label, type = "text", required, containerStyle, inputStyle, ...props }, ref) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View style={[styles.container, containerStyle]}>
            {/* Label */}
            {label && (
              <Text style={styles.label}>
                {label}
                {required && <Text style={styles.required}> *</Text>}
              </Text>
            )}

            {/* Input Field */}
            <View style={styles.inputWrapper}>
              <RNTextInput
                ref={ref}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={isPassword && !showPassword}
                keyboardType={
                  type === "email"
                    ? "email-address"
                    : type === "number"
                      ? "numeric"
                      : "default"
                }
                style={[
                  styles.input,
                  inputStyle,
                  error && styles.inputError,
                  isPassword && { paddingRight: 60 },
                ]}
                {...props}
              />

              {isPassword && (
                <TouchableOpacity
                  onPress={() => setShowPassword((prev) => !prev)}
                  style={styles.toggleButton}
                >
                  <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="black" />
                </TouchableOpacity>
              )}
            </View>

            {/* Error Message */}
            {error && (
              <Text style={styles.error}>
                {error.message || "This field is required"}
              </Text>
            )}
          </View>
        )}
      />
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "500", marginBottom: 4, color: "#333" },
  required: { color: "red" },
  inputWrapper: { position: "relative", justifyContent: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111",
    backgroundColor: "#fff",
  },
  inputError: { borderColor: "red" },
  toggleButton: {
    position: "absolute",
    right: 14,
    height: "100%",
    justifyContent: "center",
  },
  toggleText: { color: "#555", fontWeight: "500" },
  error: { color: "red", marginTop: 4, fontSize: 12 },
});
