const BUNDLE_IDENTIFIER =
  process.env.BUNDLE_IDENTIFIER || "com.eikeryejan.strongr"

export default {
  expo: {
    name: "strongr",
    slug: "strongr",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: BUNDLE_IDENTIFIER
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      package: BUNDLE_IDENTIFIER
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "9dfc6f5e-7a5f-4944-9440-331183961ded"
      }
    }
  }
}
