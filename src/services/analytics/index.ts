// Mock analytics service for development
// In production, you would integrate with services like Firebase Analytics, Mixpanel, etc.

export interface AnalyticsEvent {
  name: string;
  parameters?: Record<string, any>;
}

export interface UserProperties {
  userId?: string;
  email?: string;
  name?: string;
  signUpDate?: string;
  lastLoginDate?: string;
  [key: string]: any;
}

class AnalyticsService {
  private isInitialized = false;
  private userId: string | null = null;

  async initialize() {
    try {
      this.isInitialized = true;
      console.log("Analytics service initialized (mock)");
    } catch (error) {
      console.error("Failed to initialize analytics:", error);
    }
  }

  // Track events
  async trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      console.warn("Analytics not initialized");
      return;
    }

    console.log("📊 Analytics Event:", {
      name: event.name,
      parameters: event.parameters,
      userId: this.userId,
      timestamp: new Date().toISOString()
    });
  }

  // Set user properties
  async setUserProperties(properties: UserProperties) {
    console.log("👤 User Properties Set:", properties);
    if (properties.userId) {
      this.userId = properties.userId;
    }
  }

  // Set user ID
  async setUserId(userId: string) {
    this.userId = userId;
    console.log("🆔 User ID Set:", userId);
  }

  // Track screen views
  async trackScreen(screenName: string, screenClass?: string) {
    await this.trackEvent({
      name: "screen_view",
      parameters: {
        screen_name: screenName,
        screen_class: screenClass || screenName
      }
    });
  }

  // Auth events
  async trackSignUp(method: string = "email") {
    await this.trackEvent({
      name: "sign_up",
      parameters: {
        method
      }
    });
  }

  async trackLogin(method: string = "email") {
    await this.trackEvent({
      name: "login",
      parameters: {
        method
      }
    });
  }

  async trackLogout() {
    await this.trackEvent({
      name: "logout"
    });
  }

  // Content events
  async trackPostView(postId: string, postTitle: string, authorId: string) {
    await this.trackEvent({
      name: "post_view",
      parameters: {
        post_id: postId,
        post_title: postTitle,
        author_id: authorId
      }
    });
  }

  async trackPostLike(postId: string, postTitle: string, isLiked: boolean) {
    await this.trackEvent({
      name: isLiked ? "post_like" : "post_unlike",
      parameters: {
        post_id: postId,
        post_title: postTitle
      }
    });
  }

  async trackPostSave(postId: string, postTitle: string, isSaved: boolean) {
    await this.trackEvent({
      name: isSaved ? "post_save" : "post_unsave",
      parameters: {
        post_id: postId,
        post_title: postTitle
      }
    });
  }

  async trackPostShare(postId: string, postTitle: string, method: string) {
    await this.trackEvent({
      name: "post_share",
      parameters: {
        post_id: postId,
        post_title: postTitle,
        method
      }
    });
  }

  // Search events
  async trackSearch(query: string, resultsCount: number) {
    await this.trackEvent({
      name: "search",
      parameters: {
        search_term: query,
        results_count: resultsCount
      }
    });
  }

  // Navigation events
  async trackNavigation(from: string, to: string) {
    await this.trackEvent({
      name: "navigation",
      parameters: {
        from_screen: from,
        to_screen: to
      }
    });
  }

  // App events
  async trackAppOpen() {
    await this.trackEvent({
      name: "app_open"
    });
  }

  async trackAppBackground() {
    await this.trackEvent({
      name: "app_background"
    });
  }

  // Error tracking
  async trackError(error: Error, context?: string) {
    await this.trackEvent({
      name: "error_occurred",
      parameters: {
        error_message: error.message,
        error_stack: error.stack,
        error_context: context
      }
    });
  }

  // Feature usage
  async trackFeatureUsage(featureName: string, action: string) {
    await this.trackEvent({
      name: "feature_usage",
      parameters: {
        feature_name: featureName,
        action
      }
    });
  }

  // Settings events
  async trackSettingsChange(setting: string, value: any) {
    await this.trackEvent({
      name: "settings_change",
      parameters: {
        setting_name: setting,
        setting_value: value
      }
    });
  }

  // Performance tracking
  async trackPerformance(metric: string, value: number, unit: string = "ms") {
    await this.trackEvent({
      name: "performance_metric",
      parameters: {
        metric_name: metric,
        metric_value: value,
        metric_unit: unit
      }
    });
  }

  // User engagement
  async trackSessionStart() {
    await this.trackEvent({
      name: "session_start"
    });
  }

  async trackSessionEnd(duration: number) {
    await this.trackEvent({
      name: "session_end",
      parameters: {
        session_duration: duration
      }
    });
  }

  // Revenue events (if applicable)
  async trackPurchase(productId: string, value: number, currency: string = "USD") {
    await this.trackEvent({
      name: "purchase",
      parameters: {
        product_id: productId,
        value,
        currency
      }
    });
  }

  // Clear user data (for logout or data privacy)
  async clearUserData() {
    this.userId = null;
    console.log("🧹 Analytics user data cleared");
  }
}

export const analyticsService = new AnalyticsService();
