import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoComplete?: string;
  error?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onIconPress?: () => void;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  autoComplete,
  error,
  disabled = false,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  icon,
  iconPosition = "right",
  onIconPress,
  style,
  inputStyle,
  labelStyle
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, error && styles.labelError, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused, error && styles.inputContainerError, disabled && styles.inputContainerDisabled]}>
        {icon && iconPosition === "left" && (
          <TouchableOpacity style={styles.iconLeft} onPress={onIconPress} disabled={!onIconPress}>
            {icon}
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.input, multiline && styles.multilineInput, icon && iconPosition === "left" ? styles.inputWithLeftIcon : null, icon && iconPosition === "right" ? styles.inputWithRightIcon : null, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor='#9CA3AF'
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete as any}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {icon && iconPosition === "right" && (
          <TouchableOpacity style={styles.iconRight} onPress={onIconPress} disabled={!onIconPress}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8
  },
  labelError: {
    color: "#EF4444"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF"
  },
  inputContainerFocused: {
    borderColor: "#3B82F6",
    shadowColor: "#3B82F6",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2
  },
  inputContainerError: {
    borderColor: "#EF4444"
  },
  inputContainerDisabled: {
    backgroundColor: "#F3F4F6",
    opacity: 0.6
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827"
  },
  multilineInput: {
    textAlignVertical: "top",
    paddingTop: 12
  },
  inputWithLeftIcon: {
    paddingLeft: 8
  },
  inputWithRightIcon: {
    paddingRight: 8
  },
  iconLeft: {
    paddingLeft: 12,
    paddingRight: 8
  },
  iconRight: {
    paddingLeft: 8,
    paddingRight: 12
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginTop: 4
  }
});
