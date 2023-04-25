/* eslint-disable @typescript-eslint/no-var-requires */
const {generate} = require("build-number-generator")
const {version} = require("./package.json")

const BUNDLE_IDENTIFIER =
  process.env.BUNDLE_IDENTIFIER || "com.eikeryejan.strongr"

const buildNumber = generate()

export default {
  expo: {
    name: "strongr",
    slug: "strongr",
    version,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
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
      buildNumber,
      supportsTablet: true,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false
      }
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
