import {IconSymbol} from "@/src/components/ui/IconSymbol";
import React, {createContext, useContext, useRef, useState} from "react";
import {Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({children}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = "info", duration = 3000) => {
    const id = Date.now().toString();
    const newToast: Toast = {id, message, type, duration};

    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({toasts, onRemove}) => {
  return (
    <View style={styles.container}>
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </View>
  );
};

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({toast, onRemove}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-50)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();
  }, []);

  const handleRemove = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(translateY, {
        toValue: -50,
        duration: 200,
        useNativeDriver: true
      })
    ]).start(() => {
      onRemove(toast.id);
    });
  };

  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return "checkmark.circle.fill";
      case "error":
        return "exclamationmark.circle.fill";
      case "warning":
        return "exclamationmark.triangle.fill";
      default:
        return "info.circle.fill";
    }
  };

  const getColors = () => {
    switch (toast.type) {
      case "success":
        return {bg: "#10B981", text: "#FFFFFF"};
      case "error":
        return {bg: "#EF4444", text: "#FFFFFF"};
      case "warning":
        return {bg: "#F59E0B", text: "#FFFFFF"};
      default:
        return {bg: "#3B82F6", text: "#FFFFFF"};
    }
  };

  const colors = getColors();

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          backgroundColor: colors.bg,
          opacity,
          transform: [{translateY}]
        }
      ]}
    >
      <IconSymbol name={getIcon()} size={20} color={colors.text} style={styles.icon} />
      <Text style={[styles.message, {color: colors.text}]} numberOfLines={2}>
        {toast.message}
      </Text>
      <TouchableOpacity onPress={handleRemove} style={styles.closeButton}>
        <IconSymbol name='xmark' size={16} color={colors.text} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingHorizontal: 16
  },
  toast: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5
  },
  icon: {
    marginRight: 12
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500"
  },
  closeButton: {
    padding: 4,
    marginLeft: 8
  }
});
