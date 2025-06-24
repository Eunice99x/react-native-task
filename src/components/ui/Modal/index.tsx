import {Header} from "@/src/components/layout/Header";
import React from "react";
import {Dimensions, Modal as RNModal, StyleSheet, TouchableWithoutFeedback, View} from "react-native";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  animationType?: "slide" | "fade" | "none";
  showHeader?: boolean;
  dismissOnBackdropPress?: boolean;
  fullScreen?: boolean;
}

const {height: screenHeight} = Dimensions.get("window");

export const Modal: React.FC<ModalProps> = ({visible, onClose, title, children, animationType = "slide", showHeader = true, dismissOnBackdropPress = true, fullScreen = false}) => {
  const handleBackdropPress = () => {
    if (dismissOnBackdropPress) {
      onClose();
    }
  };

  return (
    <RNModal visible={visible} animationType={animationType} transparent={!fullScreen} onRequestClose={onClose}>
      {fullScreen ? (
        <View style={styles.fullScreenContainer}>
          {showHeader && title && <Header title={title} showBackButton onBackPress={onClose} />}
          <View style={styles.fullScreenContent}>{children}</View>
        </View>
      ) : (
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.container}>
                {showHeader && title && <Header title={title} showBackButton onBackPress={onClose} />}
                <View style={styles.content}>{children}</View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </RNModal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    maxHeight: screenHeight * 0.8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8
  },
  content: {
    padding: 20,
    maxHeight: screenHeight * 0.6
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  fullScreenContent: {
    flex: 1,
    padding: 20
  }
});
