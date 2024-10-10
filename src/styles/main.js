import { StyleSheet, Platform } from 'react-native'
import Colors from './colors'

export const baseFont = 'BricolageMedium'

export const baseMargin = 24
export const authPaddingVertical = 30
export const showBaseMargin = 24
export const inputsColumnGap = 10
export const rowGap = 30
export const rowGapLarge = 40

// Shows
export const showsBaseMargin = 13
export const showsMarginBottom = 35
export const showsGap = 8

export const actionMarginTop = Platform.OS === 'ios' ? 'auto' : 30

export const baseStyles = StyleSheet.create({
  font: {
    fontFamily: baseFont,
    fontSize: 16,
    color: Colors.white,

    // Android:
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  button: {
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.gray,
    backgroundColor: Colors.white,
    fontSize: 16,
    borderRadius: 10,
  },

  buttonTransparent: {
    backgroundColor: Colors.transparent,
    color: Colors.blue,
    borderRadius: 10,
  },

  roundedButtonContainer: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },

  roundedButton: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseButtonText: {
    fontFamily: 'BricolageBold',
    textAlign: 'center',
    paddingVertical: 15,
  },

  label: {
    color: Colors.grayLighter,
    fontFamily: 'BricolageRegular',
    fontSize: 15,
  },

  input: {
    fontFamily: 'BricolageRegular',
    color: Colors.white,
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
  },

  winningText: {
    color: Colors.white,
    fontSize: 19,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
})
