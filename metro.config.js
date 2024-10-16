const resolveFrom = require('resolve-from')
const { getSentryExpoConfig } = require('@sentry/react-native/metro')

const defaultConfig = getSentryExpoConfig(__dirname)
defaultConfig.resolver.assetExts.push('cjs')

// defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
//   if (
//     moduleName.startsWith('event-target-shim') &&
//     context.originModulePath.includes('react-native-webrtc')
//   ) {
//     // Resolve event-target-shim relative to the react-native-webrtc package to use v6.
//     // React Native requires v5 which is not compatible with react-native-webrtc.
//     const eventTargetShimPath = resolveFrom(
//       context.originModulePath,
//       moduleName
//     )

//     // Logic to resolve the module name to a file path...
//     // NOTE: Throw an error if there is no resolution.
//     return {
//       filePath: eventTargetShimPath,
//       type: 'sourceFile',
//     }
//   }

//   // Ensure you call the default resolver.
//   return context.resolveRequest(context, moduleName, platform)
// }

module.exports = defaultConfig
