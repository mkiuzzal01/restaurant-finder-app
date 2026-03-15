"use client";

import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

interface AppFormProps<T extends FieldValues = FieldValues>
  extends UseFormProps<T> {
  children: React.ReactNode;
  onSubmit: (values: T, reset: () => void) => void | Promise<void>;
}

const AppForm = <T extends FieldValues>({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: AppFormProps<T>) => {
  // Initialize form methods
  const methods = useForm<T>({
    resolver,
    defaultValues,
  });

  // Wrap submission to include reset function
  const handleFormSubmit: SubmitHandler<T> = async (values) => {
    try {
      await onSubmit(values, methods.reset);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default AppForm;
