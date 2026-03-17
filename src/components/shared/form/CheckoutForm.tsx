import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import AppForm from './AppForm';
import TextInput from './inputs/TextInput';

export default function CheckoutForm() {

  const onSubmit = (values: any, reset: () => void) => {
    console.log("Checkout form submitted:", values);
    reset();

  };

  return (
    <AppForm onSubmit={onSubmit}>
      <View style={styles.formGroup}>
        <TextInput name="name" label="Name" placeholder="Enter your name" required />
      </View>

      <View style={styles.formGroup}>
        <TextInput name="email" label="Email" type="email" placeholder="Enter your email" required />
      </View>

      <View style={styles.formGroup}>
        <TextInput name="phone" label="Phone" type="number" placeholder="Enter your phone number" required />
      </View>

      <View style={styles.formGroup}>
        <TextInput name="address" label="Address" type="text" placeholder="Enter your address" required />
      </View>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Place Order</Text>
      </TouchableOpacity>
    </AppForm>
  );
}

const styles = StyleSheet.create({
  formGroup: { marginBottom: 16 },
  submitBtn: {
    backgroundColor: "#ff5a5f",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
