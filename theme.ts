import { buildLegacyTheme } from 'sanity';

const { myWhite, myBlack, brand, myRed, myYellow, myGreen } = {
  'myWhite': '#fff',
  'myBlack': '#1a1a1a',
  'brand': '#9A1717',
  'myRed': '#db4437',
  'myYellow': '#f4b400',
  'myGreen': '#0f9d58'
}

export const myTheme = buildLegacyTheme({
  "--black": myBlack,
  "--white": myWhite,

  "--gray": '#666',
  '--gray-base': '#666',

  '--component-bg': myBlack,
  '--component-text-color': myWhite,

  '--brand-primary': brand,

  '--default-button-color': '#666',
  '--default-button-primary-color': brand,
  '--default-button-success-color': myGreen,
  "--default-button-warning-color": myYellow,
  "--default-button-danger-color": myRed,

  '--main-navigation-color': myBlack,
  '--main-navigation-color--inverted': myWhite,

  '--focus-color': brand
})