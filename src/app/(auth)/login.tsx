import {ThemedText} from "@/src/components/common/ThemedText";
import {useToast} from "@/src/components/ui/Toast";
import {authActions} from "@/src/store/slices/authSlice";
import DemoService from "@/src/utils/demo";
import {Link, router} from "expo-router";
import {useState} from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const {showToast} = useToast();
  const [form, setForm] = useState({name: "", email: ""});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Email format validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Mock valid credentials
  const validUser = {name: "John Doe", email: "john@example.com"};

  const handleLogin = async () => {
    setError("");
    if (!form.name.trim() || !form.email.trim()) {
      const errorMsg = "Please fill in all fields.";
      setError(errorMsg);
      showToast(errorMsg, "error");
      return;
    }
    if (!isValidEmail(form.email)) {
      const errorMsg = "Please enter a valid email address.";
      setError(errorMsg);
      showToast(errorMsg, "error");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      if (form.name.trim() === validUser.name && form.email.trim().toLowerCase() === validUser.email) {
        dispatch(
          authActions.setUser({
            user: {name: form.name, email: form.email},
            isAuthenticated: true,
            loading: false,
            error: null
          })
        );
        setIsLoading(false);
        showToast(`Welcome back, ${form.name}!`, "success");

        // Run demo services
        DemoService.runAuthDemo(form.name);

        router.replace("/");
      } else {
        setIsLoading(false);
        const errorMsg = "Invalid credentials. Please try again.";
        setError(errorMsg);
        showToast(errorMsg, "error");
      }
    }, 1000);
  };

  const isFormValid = form.name.trim() && isValidEmail(form.email);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' backgroundColor='#667eea' />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {error ? <Text style={{color: "#dc2626", marginBottom: 12, textAlign: "center"}}>{error}</Text> : null}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput placeholder='Enter your name' placeholderTextColor='#9CA3AF' value={form.name} onChangeText={text => setForm({...form, name: text})} style={styles.input} autoCapitalize='words' returnKeyType='next' />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder='Enter your email'
                placeholderTextColor='#9CA3AF'
                value={form.email}
                onChangeText={text => setForm({...form, email: text})}
                style={styles.input}
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                returnKeyType='done'
                onSubmitEditing={handleLogin}
              />
            </View>

            <TouchableOpacity style={[styles.loginButton, (!isFormValid || isLoading) && styles.loginButtonDisabled]} onPress={handleLogin} disabled={!isFormValid || isLoading} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>{isLoading ? "Signing In..." : "Sign In"}</Text>
            </TouchableOpacity>

            <View style={styles.forgotPassword}>
              <Link href='/forgot-password'>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </Link>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Link href='/register'>
                <ThemedText type='link'>sign up</ThemedText>
              </Link>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#667eea"
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32
  },
  header: {
    alignItems: "center",
    marginBottom: 48
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
    color: "#E5E7EB",
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
  loginButton: {
    backgroundColor: "#667eea",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#667eea",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },
  loginButtonDisabled: {
    backgroundColor: "#9CA3AF",
    shadowOpacity: 0,
    elevation: 0
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  footer: {
    alignItems: "center",
    marginTop: 32
  },
  footerText: {
    fontSize: 14,
    color: "#E5E7EB"
  },
  footerLink: {
    color: "#FFFFFF",
    fontWeight: "600"
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 16
  },
  forgotPasswordText: {
    color: "#667eea",
    fontSize: 14,
    fontWeight: "500"
  }
});
