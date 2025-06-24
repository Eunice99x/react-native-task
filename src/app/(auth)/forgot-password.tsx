import {Header} from "@/src/components/layout/Header";
import {validateEmail} from "@/src/utils/helpers";
import {Link, router} from "expo-router";
import React, {useState} from "react";
import {Alert, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 2000);
  };

  const handleGoBack = () => {
    router.back();
  };

  if (emailSent) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='#4F46E5' />
        <Header title='Check Your Email' showBackButton onBackPress={handleGoBack} backgroundColor='#4F46E5' textColor='#FFFFFF' />

        <View style={styles.content}>
          <View style={styles.successContainer}>
            <Text style={styles.successIcon}>📧</Text>
            <Text style={styles.successTitle}>Email Sent!</Text>
            <Text style={styles.successMessage}>
              We've sent a password reset link to{"\n"}
              <Text style={styles.emailText}>{email}</Text>
            </Text>
            <Text style={styles.instructionText}>Please check your email and follow the instructions to reset your password.</Text>

            <TouchableOpacity style={styles.primaryButton} onPress={handleGoBack}>
              <Text style={styles.primaryButtonText}>Back to Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton} onPress={() => setEmailSent(false)}>
              <Text style={styles.secondaryButtonText}>Resend Email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#4F46E5' />
      <Header title='Reset Password' showBackButton onBackPress={handleGoBack} backgroundColor='#4F46E5' textColor='#FFFFFF' />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.title}>Forgot your password?</Text>
            <Text style={styles.subtitle}>No worries! Enter your email address and we'll send you a link to reset your password.</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput style={styles.input} placeholder='Enter your email' placeholderTextColor='#9CA3AF' value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' autoComplete='email' returnKeyType='send' onSubmitEditing={handleResetPassword} />
            </View>

            <TouchableOpacity style={[styles.resetButton, (!email.trim() || isLoading) && styles.resetButtonDisabled]} onPress={handleResetPassword} disabled={!email.trim() || isLoading}>
              <Text style={styles.resetButtonText}>{isLoading ? "Sending..." : "Send Reset Link"}</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Remember your password?{" "}
                <Link href='/login'>
                  <Text style={styles.footerLink}>Sign In</Text>
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F46E5"
  },
  keyboardView: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32
  },
  inputContainer: {
    marginBottom: 24
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
  resetButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24
  },
  resetButtonDisabled: {
    backgroundColor: "#9CA3AF"
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  footer: {
    alignItems: "center"
  },
  footerText: {
    fontSize: 14,
    color: "#6B7280"
  },
  footerLink: {
    color: "#4F46E5",
    fontWeight: "600"
  },
  successContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8
  },
  successIcon: {
    fontSize: 64,
    marginBottom: 24
  },
  successTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16
  },
  successMessage: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 8
  },
  emailText: {
    fontWeight: "600",
    color: "#4F46E5"
  },
  instructionText: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 32
  },
  primaryButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    marginBottom: 16,
    minWidth: 200
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24
  },
  secondaryButtonText: {
    color: "#4F46E5",
    fontSize: 16,
    fontWeight: "600"
  }
});
