// /src/app/(auth)/register.tsx
import {authActions} from "@/src/store/slices/authSlice";
import {router} from "expo-router";
import {useState} from "react";
import {Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (!isFormValid()) {
      return;
    }

    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      dispatch(
        authActions.setUser({
          user: {
            name: `${form.firstName} ${form.lastName}`,
            email: form.email
          },
          isAuthenticated: true,
          loading: false,
          error: null
        })
      );
      setIsLoading(false);
      router.replace("/");
    }, 1500);
  };

  const isFormValid = () => {
    return form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.password.trim() && form.confirmPassword.trim();
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getPasswordStrength = (password: string) => {
    if (password.length < 6) return "weak";
    if (password.length < 8) return "medium";
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)) {
      return "strong";
    }
    return "medium";
  };

  const passwordStrength = getPasswordStrength(form.password);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' backgroundColor='#4f46e5' />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Join us and get started</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Name Fields */}
              <View style={styles.nameRow}>
                <View style={[styles.inputContainer, styles.nameInput]}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput placeholder='John' placeholderTextColor='#9CA3AF' value={form.firstName} onChangeText={text => setForm({...form, firstName: text})} style={styles.input} autoCapitalize='words' returnKeyType='next' />
                </View>
                <View style={[styles.inputContainer, styles.nameInput]}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput placeholder='Doe' placeholderTextColor='#9CA3AF' value={form.lastName} onChangeText={text => setForm({...form, lastName: text})} style={styles.input} autoCapitalize='words' returnKeyType='next' />
                </View>
              </View>

              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  placeholder='john.doe@example.com'
                  placeholderTextColor='#9CA3AF'
                  value={form.email}
                  onChangeText={text => setForm({...form, email: text})}
                  style={[styles.input, form.email && !isValidEmail(form.email) && styles.inputError]}
                  keyboardType='email-address'
                  autoCapitalize='none'
                  autoComplete='email'
                  returnKeyType='next'
                />
                {form.email && !isValidEmail(form.email) && <Text style={styles.errorText}>Please enter a valid email address</Text>}
              </View>

              {/* Password */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput placeholder='Create a strong password' placeholderTextColor='#9CA3AF' value={form.password} onChangeText={text => setForm({...form, password: text})} style={[styles.input, styles.passwordInput]} secureTextEntry={!showPassword} returnKeyType='next' />
                  <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
                    <Text style={styles.eyeButtonText}>{showPassword ? "Hide" : "Show"}</Text>
                  </TouchableOpacity>
                </View>
                {form.password && (
                  <View style={styles.passwordStrength}>
                    <View style={styles.strengthBar}>
                      <View style={[styles.strengthFill, passwordStrength === "weak" && styles.strengthWeak, passwordStrength === "medium" && styles.strengthMedium, passwordStrength === "strong" && styles.strengthStrong]} />
                    </View>
                    <Text style={styles.strengthText}>Password strength: {passwordStrength}</Text>
                  </View>
                )}
              </View>

              {/* Confirm Password */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder='Confirm your password'
                    placeholderTextColor='#9CA3AF'
                    value={form.confirmPassword}
                    onChangeText={text => setForm({...form, confirmPassword: text})}
                    style={[styles.input, styles.passwordInput, form.confirmPassword && form.password !== form.confirmPassword && styles.inputError]}
                    secureTextEntry={!showConfirmPassword}
                    returnKeyType='done'
                    onSubmitEditing={handleRegister}
                  />
                  <TouchableOpacity style={styles.eyeButton} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Text style={styles.eyeButtonText}>{showConfirmPassword ? "Hide" : "Show"}</Text>
                  </TouchableOpacity>
                </View>
                {form.confirmPassword && form.password !== form.confirmPassword && <Text style={styles.errorText}>Passwords do not match</Text>}
              </View>

              {/* Register Button */}
              <TouchableOpacity style={[styles.registerButton, (!isFormValid() || isLoading) && styles.registerButtonDisabled]} onPress={handleRegister} disabled={!isFormValid() || isLoading} activeOpacity={0.8}>
                <Text style={styles.registerButtonText}>{isLoading ? "Creating Account..." : "Create Account"}</Text>
              </TouchableOpacity>

              {/* Terms */}
              <Text style={styles.termsText}>
                By creating an account, you agree to our <Text style={styles.termsLink}>Terms of Service</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account?{" "}
                <TouchableOpacity onPress={() => router.push("/login")}>
                  <Text style={styles.footerLink}>Sign In</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4f46e5"
  },
  container: {
    flex: 1,
    backgroundColor: "#4f46e5"
  },
  scrollContent: {
    flexGrow: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
    minHeight: "100%"
  },
  header: {
    alignItems: "center",
    marginBottom: 32
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: "#E0E7FF",
    textAlign: "center"
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8
  },
  nameRow: {
    flexDirection: "row",
    gap: 12
  },
  nameInput: {
    flex: 1
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#F9FAFB"
  },
  inputError: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2"
  },
  passwordContainer: {
    position: "relative"
  },
  passwordInput: {
    paddingRight: 60
  },
  eyeButton: {
    position: "absolute",
    right: 16,
    top: 12,
    paddingVertical: 4
  },
  eyeButtonText: {
    color: "#6366F1",
    fontSize: 14,
    fontWeight: "500"
  },
  passwordStrength: {
    marginTop: 8
  },
  strengthBar: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 4
  },
  strengthFill: {
    height: "100%",
    borderRadius: 2
  },
  strengthWeak: {
    backgroundColor: "#EF4444",
    width: "33%"
  },
  strengthMedium: {
    backgroundColor: "#F59E0B",
    width: "66%"
  },
  strengthStrong: {
    backgroundColor: "#10B981",
    width: "100%"
  },
  strengthText: {
    fontSize: 12,
    color: "#6B7280",
    textTransform: "capitalize"
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginTop: 4
  },
  registerButton: {
    backgroundColor: "#4f46e5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#4f46e5",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },
  registerButtonDisabled: {
    backgroundColor: "#9CA3AF",
    shadowOpacity: 0,
    elevation: 0
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  termsText: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 16,
    lineHeight: 18
  },
  termsLink: {
    color: "#4f46e5",
    fontWeight: "500"
  },
  footer: {
    alignItems: "center",
    marginTop: 24
  },
  footerText: {
    fontSize: 14,
    color: "#E0E7FF"
  },
  footerLink: {
    color: "#FFFFFF",
    fontWeight: "600"
  }
});
