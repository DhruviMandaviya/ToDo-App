
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = {
  resolver: {
    blacklistRE: exclusionList([
      /node_modules\/.*\/node_modules/,
      /ios\/build/,
      /android\/build/,
      /\.log/,
    ]),
  },
  watchFolders: [__dirname], // Only watch the project root
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

