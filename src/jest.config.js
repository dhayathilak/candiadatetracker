
module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*stories.{js,jsx}"],
  setupFiles: ["./src/SetupTests.js"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    ".story.js",
    "<rootDir>/assetsTransformer.js",
    "<rootDir>/coverage",
    "<rootDir>/src/assets",
    "<rootDir>/src/utils/commandCentermockData.js",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/src/utils/commandCentermockData.js",
  ],
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./assetsTransformer.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
};
