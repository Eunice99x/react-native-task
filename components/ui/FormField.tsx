import {Input} from "@/components/ui/Input";
import React from "react";
import {Control, Controller} from "react-hook-form";

interface FormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export function FormField({control, name, label, ...props}: FormFieldProps) {
  return <Controller control={control} name={name} render={({field: {onChange, value}, fieldState: {error}}) => <Input label={label} value={value} onChangeText={onChange} error={error?.message} {...props} />} />;
}
