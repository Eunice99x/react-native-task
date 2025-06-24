// Demo utilities for showcasing the boilerplate features
import {analyticsService} from "@/src/services/analytics";
import {notificationService} from "@/src/services/notifications";

export class DemoService {
  static async initializeServices() {
    await notificationService.initialize();
    await analyticsService.initialize();
    console.log("🎯 Demo services initialized!");
  }

  static async runAuthDemo(userName: string) {
    console.log("🔐 Running Auth Demo...");

    // Track login
    await analyticsService.trackLogin("email");

    // Set user properties
    await analyticsService.setUserProperties({
      userId: "1",
      name: userName,
      signUpDate: new Date().toISOString(),
      lastLoginDate: new Date().toISOString()
    });

    // Send welcome notification
    await notificationService.sendWelcomeNotification(userName);
  }

  static async runPostInteractionDemo() {
    console.log("📝 Running Post Interaction Demo...");

    // Simulate viewing a post
    await analyticsService.trackPostView("1", "Getting Started with React Native", "author-1");

    // Simulate liking a post
    await analyticsService.trackPostLike("1", "Getting Started with React Native", true);

    // Send like notification to author
    await notificationService.sendLikeNotification("John Doe", "Building Beautiful UIs");
  }

  static async runSearchDemo(query: string) {
    console.log("🔍 Running Search Demo...");

    // Track search event
    await analyticsService.trackSearch(query, 5);

    console.log(`Search completed for: "${query}"`);
  }

  static async runNavigationDemo(fromScreen: string, toScreen: string) {
    console.log("🧭 Running Navigation Demo...");

    // Track screen view
    await analyticsService.trackScreen(toScreen);

    // Track navigation
    await analyticsService.trackNavigation(fromScreen, toScreen);
  }

  static async runNotificationDemo() {
    console.log("🔔 Running Notification Demo...");

    // Request permissions first
    const granted = await notificationService.requestPermissions();

    if (granted) {
      // Send various types of notifications
      setTimeout(() => {
        notificationService.sendNewPostNotification("Jane Smith", "Advanced React Native Tips");
      }, 2000);

      setTimeout(() => {
        notificationService.sendReminderNotification();
      }, 4000);
    }
  }

  static async runAnalyticsDemo() {
    console.log("📊 Running Analytics Demo...");

    // Track app open
    await analyticsService.trackAppOpen();

    // Track feature usage
    await analyticsService.trackFeatureUsage("search", "used");
    await analyticsService.trackFeatureUsage("post_like", "clicked");

    // Track settings change
    await analyticsService.trackSettingsChange("theme", "dark");

    // Track performance metric
    await analyticsService.trackPerformance("screen_load_time", 234, "ms");
  }

  static async runFullDemo(userName: string = "Demo User") {
    console.log("🎭 Running Full Demo Suite...");

    try {
      await this.initializeServices();

      await this.runAuthDemo(userName);
      await new Promise(resolve => setTimeout(resolve, 1000));

      await this.runPostInteractionDemo();
      await new Promise(resolve => setTimeout(resolve, 1000));

      await this.runSearchDemo("react native");
      await new Promise(resolve => setTimeout(resolve, 1000));

      await this.runNavigationDemo("Home", "Profile");
      await new Promise(resolve => setTimeout(resolve, 1000));

      await this.runAnalyticsDemo();
      await new Promise(resolve => setTimeout(resolve, 1000));

      await this.runNotificationDemo();

      console.log("✅ Full demo completed successfully!");
    } catch (error) {
      console.error("❌ Demo failed:", error);
    }
  }

  // Helper method to showcase all mock data
  static logMockDataOverview() {
    console.log("📋 Mock Data Overview:");
    console.log("- 3 Users with avatars and bios");
    console.log("- 5 Categories (Technology, Design, Programming, Mobile, Web Dev)");
    console.log("- 6+ Posts with content, images, likes, and comments");
    console.log("- Full authentication flow with validation");
    console.log("- Search functionality with real-time filtering");
    console.log("- Like/Save interactions with state persistence");
    console.log("- Theme management (light/dark/system)");
  }

  // Helper to show available test credentials
  static logTestCredentials() {
    console.log("🔑 Test Credentials:");
    console.log("Name: John Doe");
    console.log("Email: john@example.com");
    console.log("");
    console.log("You can also register a new account through the registration flow.");
  }
}

// Export for easy access in components
export default DemoService;
