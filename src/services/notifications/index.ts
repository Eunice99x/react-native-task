import {Alert} from "react-native";

export interface NotificationData {
  title: string;
  body: string;
  data?: Record<string, any>;
  categoryId?: string;
}

class NotificationService {
  private isInitialized = false;

  async initialize() {
    // Mock initialization for development
    this.isInitialized = true;
    console.log("Notification service initialized (mock)");
  }

  async scheduleLocalNotification(notification: NotificationData, delayMs?: number) {
    try {
      if (delayMs) {
        setTimeout(() => {
          this.showMockNotification(notification);
        }, delayMs);
      } else {
        this.showMockNotification(notification);
      }

      return "mock-notification-id-" + Date.now();
    } catch (error) {
      console.error("Error scheduling notification:", error);
      throw error;
    }
  }

  private showMockNotification(notification: NotificationData) {
    // For development, show as alert
    Alert.alert(notification.title, notification.body, [{text: "OK", style: "default"}]);
  }

  async cancelNotification(notificationId: string) {
    try {
      console.log("Canceling notification:", notificationId);
    } catch (error) {
      console.error("Error canceling notification:", error);
      throw error;
    }
  }

  async cancelAllNotifications() {
    try {
      console.log("Canceling all notifications");
    } catch (error) {
      console.error("Error canceling all notifications:", error);
      throw error;
    }
  }

  async getBadgeCount(): Promise<number> {
    // Mock badge count
    return 0;
  }

  async setBadgeCount(count: number) {
    console.log("Setting badge count to:", count);
  }

  async clearBadge() {
    await this.setBadgeCount(0);
  }

  // Mock push notification for demo purposes
  async sendMockPushNotification(notification: NotificationData) {
    console.log("Mock push notification:", notification);

    // For demo, schedule as local notification with 1 second delay
    await this.scheduleLocalNotification(notification, 1000);
  }

  // Predefined notification templates
  async sendWelcomeNotification(userName: string) {
    await this.scheduleLocalNotification({
      title: "Welcome to our app! 🎉",
      body: `Hi ${userName}! Thanks for joining us. Explore amazing content and connect with others.`,
      data: {type: "welcome"}
    });
  }

  async sendNewPostNotification(authorName: string, postTitle: string) {
    await this.scheduleLocalNotification({
      title: "New post available! 📝",
      body: `${authorName} just posted: "${postTitle}"`,
      data: {type: "new_post", authorName, postTitle}
    });
  }

  async sendLikeNotification(userName: string, postTitle: string) {
    await this.scheduleLocalNotification({
      title: "Someone liked your post! ❤️",
      body: `${userName} liked your post "${postTitle}"`,
      data: {type: "like", userName, postTitle}
    });
  }

  async sendReminderNotification() {
    await this.scheduleLocalNotification({
      title: "Don't forget to check out new posts! 📱",
      body: "There might be some interesting content waiting for you.",
      data: {type: "reminder"}
    });
  }

  async requestPermissions(): Promise<boolean> {
    // Mock permission request
    return new Promise(resolve => {
      Alert.alert("Enable Notifications", "Would you like to receive notifications from this app?", [
        {text: "No", style: "cancel", onPress: () => resolve(false)},
        {text: "Yes", style: "default", onPress: () => resolve(true)}
      ]);
    });
  }
}

export const notificationService = new NotificationService();
