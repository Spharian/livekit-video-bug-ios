module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "react-native/react-native": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/no-unescaped-entities": 0,
        "no-case-declarations": 0,
        "react/display-name": "off",
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react/react-in-jsx-scope": "off",
        "react-native/no-color-literals": 2,
        "react-native/no-single-element-style-arrays": 2,
    },
}
