import React from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormProps,
  SubmitHandler,
} from "react-hook-form";
import { ScrollView } from "react-native";

interface AppFormProps<T extends FieldValues = FieldValues> extends UseFormProps<T> {
  children: React.ReactNode;
  onSubmit: (values: T, reset: () => void) => void | Promise<void>;
}

const AppForm = <T extends FieldValues>({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: AppFormProps<T>) => {
  const methods = useForm<T>({
    resolver,
    defaultValues,
  });

  const handleFormSubmit: SubmitHandler<T> = async (values) => {
    try {
      await onSubmit(values, methods.reset);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 16 }}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<any>, { handleSubmit: methods.handleSubmit(handleFormSubmit) })
            : child
        )}
      </ScrollView>
    </FormProvider>
  );
};

export default AppForm;
