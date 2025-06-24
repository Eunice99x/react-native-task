# React Native Learning Boilerplate 🚀

A comprehensive React Native boilerplate built with Expo, featuring authentication, navigation, state management, and many other essential features for modern mobile app development.

## ✨ Features

### 🔐 Authentication System

- **Login & Registration** with form validation
- **Forgot Password** flow with email reset
- **Redux state management** for auth state
- **Persistent authentication** using Redux Persist
- Input validation and error handling

### 🧭 Navigation

- **Expo Router** for file-based routing
- **Tab Navigation** with 5 main screens:
  - Home (Dashboard with featured content)
  - Explore (Learning resources and examples)
  - Search (Content discovery with real-time search)
  - Saved (Bookmarked content)
  - Profile (User profile and settings)
- **Modal screens** for settings and other overlays
- **Authentication guards** for protected routes

### 📱 Core Screens

#### Home Screen

- Welcome dashboard with personalized greeting
- Featured posts showcase
- Quick action buttons
- Stats overview (liked, saved posts)
- Category filters

#### Search Screen

- Real-time search functionality
- Debounced search input
- Search results with highlighting
- Filter by categories and tags

#### Profile Screen

- User profile display with avatar
- Stats overview (posts, likes, saves)
- Settings navigation
- Menu items for various profile actions

#### Settings Screen

- Theme management (light/dark/system)
- Notification preferences
- Account management
- App information

### 🎨 UI Components

- **Themed Components** supporting light/dark modes
- **Reusable UI Components**:
  - Button with variants
  - Input fields with validation
  - Post cards with interactions
  - Loading states
  - Modal dialogs
  - Headers with navigation
  - Search bar with filtering

### 🗃️ State Management

- **Redux Toolkit** for state management
- **Redux Persist** for data persistence
- **Organized slices**:
  - Auth slice (user authentication)
  - Posts slice (content management)
  - Theme slice (appearance settings)

### 📊 Data & Services

- **Mock Data** for development
- **API Services** (mock implementations)
- **Analytics Service** for tracking user behavior
- **Notification Service** for push notifications
- **Storage helpers** for local data

### 🎯 Content Management

- **Posts system** with CRUD operations
- **Like/Save functionality** for posts
- **Categories and tags** for organization
- **User-generated content** support
- **Search and filtering** capabilities

## 🗂️ Project Structure

```
src/
├── app/                          # Expo Router screens
│   ├── (auth)/                   # Authentication screens
│   │   ├── login.tsx            # Login screen
│   │   ├── register.tsx         # Registration screen
│   │   └── forgot-password.tsx  # Password reset
│   ├── (tabs)/                  # Main tab navigation
│   │   ├── index.tsx            # Home screen
│   │   ├── explore.tsx          # Explore/learning screen
│   │   ├── search.tsx           # Search screen
│   │   ├── saved.tsx            # Saved content
│   │   └── profile.tsx          # User profile
│   ├── (modals)/                # Modal screens
│   │   └── settings.tsx         # Settings screen
│   ├── _layout.tsx              # Root layout with providers
│   └── index.tsx                # Route controller
├── components/                   # Reusable components
│   ├── common/                  # Common UI components
│   │   ├── ParallaxScrollView/  # Animated scroll view
│   │   ├── ThemedText/          # Themed text component
│   │   └── ThemedView/          # Themed view component
│   ├── forms/                   # Form components
│   │   ├── ContactForm/         # Contact form
│   │   └── LoginForm/           # Login form
│   ├── layout/                  # Layout components
│   │   └── Header/              # Navigation header
│   └── ui/                      # UI building blocks
│       ├── Button/              # Button component
│       ├── Card/                # Card components
│       ├── Input/               # Input components
│       ├── Loading/             # Loading indicators
│       ├── Modal/               # Modal dialogs
│       └── SearchBar/           # Search input
├── hooks/                       # Custom React hooks
│   ├── useAuth.ts              # Authentication hook
│   ├── useColorScheme.ts       # Theme detection
│   └── useThemeColor.ts        # Theme color helper
├── services/                    # External services
│   ├── analytics/              # Analytics service
│   ├── api/                    # API clients
│   ├── notifications/          # Push notifications
│   └── storage/                # Local storage
├── store/                      # Redux store
│   ├── slices/                 # Redux slices
│   │   ├── authSlice.ts        # Authentication state
│   │   ├── postsSlice.ts       # Posts state
│   │   └── themeSlice.ts       # Theme state
│   └── store.ts                # Store configuration
├── styles/                     # Style definitions
│   └── theme/                  # Theme configuration
├── types/                      # TypeScript definitions
│   └── index.ts                # Global type definitions
└── utils/                      # Utility functions
    ├── constants/              # App constants
    │   ├── colors.ts           # Color palette
    │   └── mockData.ts         # Development data
    ├── formatters/             # Data formatters
    │   └── date.ts             # Date formatting
    ├── helpers/                # Helper functions
    │   └── index.ts            # General utilities
    └── validation/             # Validation schemas
        └── schemas.ts          # Form validation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-native-learning
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app for physical device

## 🔧 Development

### Environment Setup

- The project uses Expo for simplified React Native development
- TypeScript is configured for type safety
- ESLint and Prettier for code formatting

### Authentication Flow

- Default login credentials for testing:
  - **Name**: John Doe
  - **Email**: john@example.com

### State Management

- Uses Redux Toolkit for efficient state management
- Redux Persist maintains state across app restarts
- Organized into feature-based slices

### Styling

- Supports both light and dark themes
- Uses React Native StyleSheet for performance
- Responsive design principles

## 📚 Key Technologies

- **React Native** - Mobile app framework
- **Expo** - Development platform and toolchain
- **TypeScript** - Type safety and better DX
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **Expo Router** - File-based navigation
- **React Native Reanimated** - Animations

## 🎨 Customization

### Adding New Screens

1. Create a new file in the appropriate `app/` directory
2. Export a default React component
3. The file-based routing will automatically handle navigation

### Modifying Themes

- Edit `src/utils/constants/colors.ts` for color schemes
- Update `src/store/slices/themeSlice.ts` for theme logic
- Customize `src/components/common/Themed*` components

### Adding Mock Data

- Update `src/utils/constants/mockData.ts` with new content
- Modify the corresponding Redux slices for state management

## 📝 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web browser
- `npm run reset-project` - Reset to clean project state

## 🔮 Future Enhancements

- [ ] Real backend API integration
- [ ] Push notifications with Expo Notifications
- [ ] Offline support with Redux Persist
- [ ] Image upload and camera integration
- [ ] Social media sharing
- [ ] In-app purchases
- [ ] Deep linking
- [ ] Internationalization (i18n)
- [ ] Unit and integration tests
- [ ] CI/CD pipeline setup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- UI inspiration from modern mobile design patterns
- Icons from SF Symbols and Unicode emojis
- Images from [Unsplash](https://unsplash.com)

---

**Happy coding! 🎉**

For questions or support, please open an issue in the GitHub repository.
