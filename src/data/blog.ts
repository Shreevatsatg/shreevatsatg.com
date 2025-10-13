export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'building-scalable-rest-apis-with-nodejs-express-mongodb',
    title: 'Building Scalable REST APIs with Node.js, Express & MongoDB',
    summary: 'A comprehensive guide to architecting and implementing production-ready RESTful APIs using the MERN stack, covering authentication, validation, error handling, and best practices.',
    date: '2025-10-15',
    content: `
      <h2 class="text-2xl font-medium text-slate-100 mb-4">Setting Up the Foundation</h2>
      <p class="mb-4">Building a robust API starts with proper project structure. I organize my Express applications using a modular architecture that separates concerns and makes the codebase maintainable as it grows. The typical structure includes routes, controllers, models, middleware, and utilities folders.</p>
      <pre><code class="language-javascript">// server.js - Entry point
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

// Global error handler
app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Mongoose Models and Schema Design</h2>
      <p class="mb-4">Effective schema design is crucial for performance and scalability. I use Mongoose's powerful schema features including validation, virtuals, indexes, and middleware hooks:</p>
      <pre><code class="language-javascript">// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Authentication & Authorization</h2>
      <p class="mb-4">Implementing secure authentication is critical. I use JWT tokens with HTTP-only cookies for web clients and Bearer tokens for mobile apps:</p>
      <pre><code class="language-javascript">// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Advanced Error Handling</h2>
      <p class="mb-4">Centralized error handling provides consistent responses and makes debugging easier. This pattern catches all errors and formats them appropriately for the client.</p>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Pagination, Filtering & Sorting</h2>
      <p class="mb-4">For large datasets, implementing efficient pagination is essential. Create reusable middleware that handles query parameters, filtering, sorting, and pagination automatically.</p>

      <p class="mt-6">Building scalable REST APIs with the MERN stack requires attention to security, performance, and code organization. By following these patterns and best practices, you'll create APIs that are maintainable, secure, and production-ready.</p>
    `,
  },
  {
    slug: 'react-native-expo-complete-guide',
    title: 'React Native with Expo: Building Cross-Platform Mobile Apps',
    summary: 'An in-depth exploration of building production-ready mobile applications using React Native and Expo, covering navigation, native features, performance optimization, and deployment.',
    date: '2025-10-14',
    content: `
      <h2 class="text-2xl font-medium text-slate-100 mb-4">Why Expo for React Native Development</h2>
      <p class="mb-4">Expo revolutionizes React Native development by providing a managed workflow that eliminates native code complexity. With Expo, you get instant access to a comprehensive SDK, over-the-air updates, and a streamlined development experience.</p>
      <pre><code class="language-bash">npx create-expo-app@latest my-app --template blank-typescript
cd my-app
npx expo start</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Navigation with React Navigation</h2>
      <p class="mb-4">React Navigation is the standard for routing in React Native apps. Here's a complete navigation setup with authentication flow:</p>
      <pre><code class="language-typescript">// navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = route.name === 'Home' ? 
          (focused ? 'home' : 'home-outline') : 
          (focused ? 'person' : 'person-outline');
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function AppNavigator() {
  const { isAuthenticated } = useAuth();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">State Management with Zustand</h2>
      <p class="mb-4">For state management, I prefer Zustand for its simplicity and excellent TypeScript support:</p>
      <pre><code class="language-typescript">// store/authStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: async (email, password) => {
        const response = await authService.login(email, password);
        set({ 
          user: response.user, 
          token: response.token,
          isAuthenticated: true 
        });
      },
      
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Working with Native Features</h2>
      <p class="mb-4">Expo provides easy access to device features. Here's how to implement camera functionality:</p>
      <pre><code class="language-typescript">// components/CameraComponent.tsx
import { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function CameraComponent() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Camera permission required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage = async () => {
    if (!image) return;
    
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      await MediaLibrary.saveToLibraryAsync(image);
      alert('Image saved!');
    }
  };

  return (
    <View>
      <Button title="Take Photo" onPress={pickImage} />
      {image && (
        <>
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
          <Button title="Save to Gallery" onPress={saveImage} />
        </>
      )}
    </View>
  );
}</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Location Services</h2>
      <p class="mb-4">Implementing location tracking and geofencing with Expo Location:</p>
      <pre><code class="language-typescript">import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // Watch location changes
      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => setLocation(newLocation)
      );
    })();
  }, []);

  return location;
}</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Push Notifications</h2>
      <p class="mb-4">Setting up push notifications with Expo Notifications:</p>
      <pre><code class="language-typescript">import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function registerForPushNotifications() {
  if (!Device.isDevice) {
    alert('Must use physical device for push notifications');
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token!');
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync({
    projectId: 'your-project-id',
  });

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  return token.data;
}</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Performance Optimization</h2>
      <p class="mb-4">Optimizing React Native apps for smooth 60fps performance:</p>
      <pre><code class="language-typescript">// Use FlatList for long lists
import { FlatList, View, Text } from 'react-native';

const OptimizedList = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ItemComponent item={item} />}
    keyExtractor={(item) => item.id}
    removeClippedSubviews={true}
    maxToRenderPerBatch={10}
    updateCellsBatchingPeriod={50}
    initialNumToRender={10}
    windowSize={5}
    getItemLayout={(data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    })}
  />
);

// Memoize components
import { memo } from 'react';

const ItemComponent = memo(({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
));</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Building and Deployment</h2>
      <p class="mb-4">Building your app for iOS and Android with EAS Build:</p>
      <pre><code class="language-bash"># Install EAS CLI
npm install -g eas-cli

# Configure project
eas build:configure

# Build for both platforms
eas build --platform all

# Submit to app stores
eas submit --platform ios
eas submit --platform android

# OTA Updates
eas update --branch production --message "Bug fixes"</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">App Configuration</h2>
      <p class="mb-4">Essential app.json configuration for production apps:</p>
      <pre><code class="language-json">{
  "expo": {
    "name": "MyApp",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/your-project-id"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.myapp",
      "buildNumber": "1.0.0"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.yourcompany.myapp",
      "versionCode": 1,
      "permissions": ["CAMERA", "ACCESS_FINE_LOCATION"]
    }
  }
}</code></pre>

      <p class="mt-6">React Native with Expo provides a powerful platform for building cross-platform mobile apps. With proper architecture, state management, and optimization techniques, you can create apps that rival native performance while maintaining a single codebase.</p>
    `,
  },
  {
    slug: 'mern-stack-authentication-authorization',
    title: 'Complete Authentication & Authorization System in MERN Stack',
    summary: 'Building a secure, production-ready authentication system with JWT tokens, refresh tokens, email verification, password reset, and role-based access control.',
    date: '2025-10-13',
    content: `
      <h2 class="text-2xl font-medium text-slate-100 mb-4">The Complete Auth Architecture</h2>
      <p class="mb-4">A robust authentication system is the foundation of any secure application. I'll show you how to build a complete auth system with access tokens, refresh tokens, email verification, and password reset functionality.</p>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Backend: User Model with Security Features</h2>
      <pre><code class="language-javascript">// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  emailVerificationExpire: Date,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  refreshTokens: [{ token: String, createdAt: Date }],
  lastLogin: Date,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date
}, { timestamps: true });

// Virtual for account lock status
userSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Hash password before save
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Generate email verification token
userSchema.methods.generateEmailVerificationToken = function() {
  const token = crypto.randomBytes(32).toString('hex');
  
  this.emailVerificationToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
    
  this.emailVerificationExpire = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  
  return token;
};

// Generate password reset token
userSchema.methods.generateResetPasswordToken = function() {
  const token = crypto.randomBytes(32).toString('hex');
  
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
    
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  
  return token;
};

// Handle login attempts
userSchema.methods.incLoginAttempts = function() {
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({
      $set: { loginAttempts: 1 },
      $unset: { lockUntil: 1 }
    });
  }
  
  const updates = { $inc: { loginAttempts: 1 } };
  const needsLock = this.loginAttempts + 1 >= 5;
  
  if (needsLock) {
    updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 }; // 2 hours
  }
  
  return this.updateOne(updates);
};

module.exports = mongoose.model('User', userSchema);</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">JWT Token Generation and Validation</h2>
      <pre><code class="language-javascript">// utils/tokenService.js
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class TokenService {
  // Generate access token (short-lived)
  generateAccessToken(userId, role) {
    return jwt.sign(
      { id: userId, role },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: '15m' }
    );
  }

  // Generate refresh token (long-lived)
  generateRefreshToken(userId) {
    const token = jwt.sign(
      { id: userId, type: 'refresh' },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );
    return token;
  }

  // Verify access token
  verifyAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (error) {
      throw new Error('Invalid access token');
    }
  }

  // Verify refresh token
  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  // Generate token pair
  generateTokenPair(userId, role) {
    return {
      accessToken: this.generateAccessToken(userId, role),
      refreshToken: this.generateRefreshToken(userId)
    };
  }
}

module.exports = new TokenService();</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Authentication Controller</h2>
      <pre><code class="language-javascript">// controllers/authController.js
const User = require('../models/User');
const tokenService = require('../utils/tokenService');
const emailService = require('../utils/emailService');
const crypto = require('crypto');

// Register user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ 
        success: false, 
        message: 'User already exists' 
      });
    }

    // Create user
    user = await User.create({ name, email, password });

    // Generate email verification token
    const verificationToken = user.generateEmailVerificationToken();
    await user.save();

    // Send verification email
    const verificationUrl = \`\${process.env.CLIENT_URL}/verify-email/\${verificationToken}\`;
    await emailService.sendVerificationEmail(user.email, verificationUrl);

    res.status(201).json({
      success: true,
      message: 'Registration successful! Please check your email to verify your account.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and include password
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Check if account is locked
    if (user.isLocked) {
      return res.status(423).json({
        success: false,
        message: 'Account is temporarily locked due to multiple failed login attempts'
      });
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      await user.incLoginAttempts();
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Check email verification
    if (!user.isEmailVerified) {
      return res.status(403).json({
        success: false,
        message: 'Please verify your email before logging in'
      });
    }

    // Reset login attempts
    if (user.loginAttempts > 0) {
      await user.updateOne({ 
        $set: { loginAttempts: 0 },
        $unset: { lockUntil: 1 }
      });
    }

    // Generate tokens
    const { accessToken, refreshToken } = tokenService.generateTokenPair(
      user._id,
      user.role
    );

    // Save refresh token
    user.refreshTokens.push({
      token: refreshToken,
      createdAt: new Date()
    });
    user.lastLogin = new Date();
    await user.save();

    // Set refresh token as HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({
      success: true,
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Refresh access token
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).json({ 
        success: false, 
        message: 'Refresh token not found' 
      });
    }

    // Verify refresh token
    const decoded = tokenService.verifyRefreshToken(refreshToken);

    // Find user and check if token exists
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    const tokenExists = user.refreshTokens.some(t => t.token === refreshToken);
    
    if (!tokenExists) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid refresh token' 
      });
    }

    // Generate new access token
    const accessToken = tokenService.generateAccessToken(user._id, user.role);

    res.json({ success: true, accessToken });
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid refresh token' });
  }
};

// Logout
exports.logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (refreshToken) {
      await User.updateOne(
        { _id: req.user.id },
        { $pull: { refreshTokens: { token: refreshToken } } }
      );
    }

    res.clearCookie('refreshToken');
    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired verification token'
      });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpire = undefined;
    await user.save();

    res.json({
      success: true,
      message: 'Email verified successfully! You can now log in.'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No user found with that email'
      });
    }

    const resetToken = user.generateResetPasswordToken();
    await user.save();

    const resetUrl = \`\${process.env.CLIENT_URL}/reset-password/\${resetToken}\`;
    await emailService.sendPasswordResetEmail(user.email, resetUrl);

    res.json({
      success: true,
      message: 'Password reset email sent'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Frontend: React Authentication Context</h2>
      <pre><code class="language-typescript">// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Axios instance with interceptors
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('accessToken')
  );

  // Request interceptor to add token
  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = \`Bearer \${accessToken}\`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor to handle token refresh
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(token => {
              originalRequest.headers.Authorization = \`Bearer \${token}\`;
              return api(originalRequest);
            })
            .catch(err => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const { data } = await axios.post(
            \`\${process.env.REACT_APP_API_URL}/auth/refresh\`,
            {},
            { withCredentials: true }
          );

          const newToken = data.accessToken;
          setAccessToken(newToken);
          localStorage.setItem('accessToken', newToken);

          api.defaults.headers.common.Authorization = \`Bearer \${newToken}\`;
          originalRequest.headers.Authorization = \`Bearer \${newToken}\`;

          processQueue(null, newToken);
          isRefreshing = false;

          return api(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          isRefreshing = false;
          setUser(null);
          setAccessToken(null);
          localStorage.removeItem('accessToken');
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  const refreshAccessToken = async (): Promise<string> => {
    const { data } = await api.post('/auth/refresh');
    setAccessToken(data.accessToken);
    localStorage.setItem('accessToken', data.accessToken);
    return data.accessToken;
  };

  const login = async (email: string, password: string) => {
    const { data } = await api.post('/auth/login', { email, password });
    setUser(data.user);
    setAccessToken(data.accessToken);
    localStorage.setItem('accessToken', data.accessToken);
  };

  const register = async (name: string, email: string, password: string) => {
    await api.post('/auth/register', { name, email, password });
  };

  const logout = async () => {
    await api.post('/auth/logout');
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  };

  // Load user on mount
  useEffect(() => {
    const loadUser = async () => {
      if (accessToken) {
        try {
          const { data } = await api.get('/auth/me');
          setUser(data.user);
        } catch (error) {
          setAccessToken(null);
          localStorage.removeItem('accessToken');
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        refreshAccessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Protected Route Component</h2>
      <pre><code class="language-typescript">// components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  allowedRoles 
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user!.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};</code></pre>

      <p class="mt-6">This complete authentication system provides enterprise-level security with JWT tokens, refresh token rotation, email verification, password reset, and role-based access control. It's production-ready and scalable for any MERN stack application.</p>
    `,
  },
  {
    slug: 'react-native-offline-first-architecture',
    title: 'Building Offline-First React Native Apps with Local Database',
    summary: 'Learn how to create resilient mobile applications that work seamlessly offline using React Native, WatermelonDB, and smart data synchronization strategies.',
    date: '2025-10-12',
    content: `
      <h2 class="text-2xl font-medium text-slate-100 mb-4">Why Offline-First Architecture Matters</h2>
      <p class="mb-4">Mobile users don't always have reliable internet connectivity. Building offline-first apps ensures your users can continue working regardless of network conditions. I'll show you how to implement a robust offline-first architecture using WatermelonDB, a powerful reactive database for React Native.</p>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Setting Up WatermelonDB</h2>
      <pre><code class="language-bash">npm install @nozbe/watermelondb @nozbe/with-observables
npx expo install expo-sqlite</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Database Schema Definition</h2>
      <pre><code class="language-typescript">// models/schema.ts
import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' },
        { name: 'author_id', type: 'string', isIndexed: true },
        { name: 'is_synced', type: 'boolean' },
        { name: 'server_id', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'comments',
      columns: [
        { name: 'post_id', type: 'string', isIndexed: true },
        { name: 'content', type: 'string' },
        { name: 'author_id', type: 'string' },
        { name: 'is_synced', type: 'boolean' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'users',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'avatar', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
  ]
});</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Model Definitions</h2>
      <pre><code class="language-typescript">// models/Post.ts
import { Model } from '@nozbe/watermelondb';
import { field, date, readonly, relation, children } from '@nozbe/watermelondb/decorators';

export class Post extends Model {
  static table = 'posts';
  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
    users: { type: 'belongs_to', key: 'author_id' }
  };

  @field('title') title!: string;
  @field('body') body!: string;
  @field('author_id') authorId!: string;
  @field('is_synced') isSynced!: boolean;
  @field('server_id') serverId?: string;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  @relation('users', 'author_id') author!: any;
  @children('comments') comments!: any;
}

// models/Comment.ts
export class Comment extends Model {
  static table = 'comments';
  static associations = {
    posts: { type: 'belongs_to', key: 'post_id' }
  };

  @field('post_id') postId!: string;
  @field('content') content!: string;
  @field('author_id') authorId!: string;
  @field('is_synced') isSynced!: boolean;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;

  @relation('posts', 'post_id') post!: any;
}</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Database Configuration</h2>
      <pre><code class="language-typescript">// database/index.ts
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from '../models/schema';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { User } from '../models/User';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'myapp',
  jsi: true, // Use JSI for better performance
  onSetUpError: (error) => {
    console.error('Database setup error:', error);
  }
});

export const database = new Database({
  adapter,
  modelClasses: [Post, Comment, User],
});

export default database;</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Network Connectivity Detection</h2>
      <pre><code class="language-typescript">// hooks/useNetworkStatus.ts
import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [isInternetReachable, setIsInternetReachable] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setIsInternetReachable(state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);

  return { isConnected, isInternetReachable, isOnline: isConnected && isInternetReachable };
};</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Data Synchronization Service</h2>
      <pre><code class="language-typescript">// services/syncService.ts
import { database } from '../database';
import { Q } from '@nozbe/watermelondb';
import axios from 'axios';

class SyncService {
  private isSyncing = false;
  private syncQueue: Array<() => Promise<void>> = [];

  async syncAll() {
    if (this.isSyncing) {
      console.log('Sync already in progress');
      return;
    }

    this.isSyncing = true;

    try {
      await this.pushLocalChanges();
      await this.pullServerChanges();
      console.log('Sync completed successfully');
    } catch (error) {
      console.error('Sync failed:', error);
      throw error;
    } finally {
      this.isSyncing = false;
    }
  }

  private async pushLocalChanges() {
    const unsyncedPosts = await database
      .get('posts')
      .query(Q.where('is_synced', false))
      .fetch();

    for (const post of unsyncedPosts) {
      try {
        const response = await axios.post('/api/posts', {
          title: post.title,
          body: post.body,
          authorId: post.authorId
        });

        await database.write(async () => {
          await post.update(p => {
            p.isSynced = true;
            p.serverId = response.data.id;
          });
        });
      } catch (error) {
        console.error('Failed to sync post:', post.id, error);
      }
    }
  }

  private async pullServerChanges() {
    try {
      const lastSyncTime = await this.getLastSyncTime();
      const response = await axios.get(\`/api/posts/sync?since=\${lastSyncTime}\`);

      await database.write(async () => {
        const postsCollection = database.get('posts');

        for (const serverPost of response.data.posts) {
          const existingPost = await postsCollection
            .query(Q.where('server_id', serverPost.id))
            .fetch();

          if (existingPost.length > 0) {
            // Update existing post
            await existingPost[0].update(post => {
              post.title = serverPost.title;
              post.body = serverPost.body;
              post.isSynced = true;
            });
          } else {
            // Create new post
            await postsCollection.create(post => {
              post.title = serverPost.title;
              post.body = serverPost.body;
              post.authorId = serverPost.authorId;
              post.serverId = serverPost.id;
              post.isSynced = true;
            });
          }
        }
      });

      await this.setLastSyncTime(Date.now());
    } catch (error) {
      console.error('Failed to pull server changes:', error);
      throw error;
    }
  }

  private async getLastSyncTime(): Promise<number> {
    // Implement storage retrieval
    return 0;
  }

  private async setLastSyncTime(time: number): Promise<void> {
    // Implement storage saving
  }
}

export const syncService = new SyncService();</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">React Components with Observables</h2>
      <pre><code class="language-typescript">// components/PostsList.tsx
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import { database } from '../database';

const PostItem = ({ post }) => (
  <View style={{ padding: 16, borderBottomWidth: 1 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{post.title}</Text>
    <Text style={{ marginTop: 8 }}>{post.body}</Text>
    {!post.isSynced && (
      <Text style={{ color: 'orange', marginTop: 4 }}>● Not synced</Text>
    )}
  </View>
);

const EnhancedPostItem = withObservables(['post'], ({ post }) => ({
  post: post.observe(),
}))(PostItem);

const PostsList = ({ posts }) => (
  <FlatList
    data={posts}
    renderItem={({ item }) => <EnhancedPostItem post={item} />}
    keyExtractor={item => item.id}
  />
);

export default withObservables([], () => ({
  posts: database.get('posts').query(Q.sortBy('created_at', Q.desc)).observe(),
}))(PostsList);</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Creating and Updating Records</h2>
      <pre><code class="language-typescript">// hooks/usePosts.ts
import { database } from '../database';
import { useNetworkStatus } from './useNetworkStatus';
import { syncService } from '../services/syncService';

export const usePosts = () => {
  const { isOnline } = useNetworkStatus();

  const createPost = async (title: string, body: string, authorId: string) => {
    await database.write(async () => {
      const post = await database.get('posts').create(post => {
        post.title = title;
        post.body = body;
        post.authorId = authorId;
        post.isSynced = false;
      });

      // Try to sync immediately if online
      if (isOnline) {
        syncService.syncAll().catch(console.error);
      }

      return post;
    });
  };

  const updatePost = async (postId: string, updates: { title?: string; body?: string }) => {
    await database.write(async () => {
      const post = await database.get('posts').find(postId);
      await post.update(p => {
        if (updates.title) p.title = updates.title;
        if (updates.body) p.body = updates.body;
        p.isSynced = false;
      });

      if (isOnline) {
        syncService.syncAll().catch(console.error);
      }
    });
  };

  const deletePost = async (postId: string) => {
    await database.write(async () => {
      const post = await database.get('posts').find(postId);
      await post.markAsDeleted();
    });
  };

  return { createPost, updatePost, deletePost };
};</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Automatic Background Sync</h2>
      <pre><code class="language-typescript">// App.tsx - Background sync setup
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useNetworkStatus } from './hooks/useNetworkStatus';
import { syncService } from './services/syncService';

export default function App() {
  const { isOnline } = useNetworkStatus();

  useEffect(() => {
    // Sync when app becomes active
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active' && isOnline) {
        syncService.syncAll().catch(console.error);
      }
    });

    return () => subscription.remove();
  }, [isOnline]);

  useEffect(() => {
    // Sync when connection restored
    if (isOnline) {
      syncService.syncAll().catch(console.error);
    }
  }, [isOnline]);

  // Periodic sync every 5 minutes when online
  useEffect(() => {
    if (!isOnline) return;

    const interval = setInterval(() => {
      syncService.syncAll().catch(console.error);
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [isOnline]);

  return <Navigation />;
}</code></pre>

      <h2 class="text-2xl font-medium text-slate-100 mt-6 mb-4">Conflict Resolution Strategy</h2>
      <pre><code class="language-typescript">// services/conflictResolver.ts
export class ConflictResolver {
  // Last-write-wins strategy
  async resolveConflict(localRecord: any, serverRecord: any) {
    if (localRecord.updatedAt > serverRecord.updatedAt) {
      // Local is newer, push to server
      return { action: 'push', record: localRecord };
    } else {
      // Server is newer, use server version
      return { action: 'pull', record: serverRecord };
    }
  }

  // Custom merge strategy
  async mergeRecords(localRecord: any, serverRecord: any) {
    return {
      ...serverRecord,
      // Keep local changes for specific fields
      customField: localRecord.customField
    };
  }
}</code></pre>

      <p class="mt-6">Building offline-first React Native apps with WatermelonDB provides a seamless user experience regardless of network conditions. This architecture ensures data persistence, automatic synchronization, and conflict resolution, making your mobile apps truly resilient and production-ready.</p>
    `,
  },
];