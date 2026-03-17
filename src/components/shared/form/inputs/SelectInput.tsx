import React, { forwardRef, useState } from "react";
import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectInputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  required?: boolean;
  options: SelectOption[];
  containerStyle?: object;
  inputStyle?: object;
}

const SelectInput = forwardRef<any, SelectInputProps<any>>(
  ({ name, label, required, options, containerStyle, inputStyle }, ref) => {
    const { control } = useFormContext();
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View style={[styles.container, containerStyle]}>
            {label && (
              <Text style={styles.label}>
                {label}
                {required && <Text style={styles.required}> *</Text>}
              </Text>
            )}

            <TouchableOpacity
              style={[styles.input, inputStyle, error && styles.inputError]}
              onPress={() => setModalVisible(true)}
              ref={ref}
            >
              <Text style={{ color: value ? "#111" : "#888" }}>
                {value
                  ? options.find((opt) => opt.value === value)?.label
                  : "Select an option"}
              </Text>
            </TouchableOpacity>

            {error && <Text style={styles.error}>{error.message || "This field is required"}</Text>}

            <Modal visible={modalVisible} transparent animationType="slide">
              <TouchableOpacity
                style={styles.modalOverlay}
                onPress={() => setModalVisible(false)}
              />
              <View style={styles.modalContent}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => String(item.value)}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => {
                        onChange(item.value);
                        setModalVisible(false);
                      }}
                    >
                      <Text style={styles.optionText}>{item.label}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </Modal>
          </View>
        )}
      />
    );
  }
);

SelectInput.displayName = "SelectInput";
export default SelectInput;

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "500", marginBottom: 4, color: "#333" },
  required: { color: "red" },
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
  error: { color: "red", marginTop: 4, fontSize: 12 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 40,
    maxHeight: 300,
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: { fontSize: 16, color: "#111" },
});
