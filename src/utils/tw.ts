// lib/tailwind.js
import { create } from 'twrnc';
import colors from './colors';

let defaultTheme = {
  theme: {
    extend: {
      colors: {
        primary: colors.PRIMARY_COLOR,
        documentBackground: colors.DOCUMENT_BACKGROUND_COLOR,
        secondary: colors.SECONDARY_COLOR,
        error: colors.ERROR_COLOR,
      },
    },
  },
};

let tw = create(defaultTheme);

const tailwindBuilder = (...val: TemplateStringsArray[]) => {
  return tw(...(val as [TemplateStringsArray]));
};

export default tailwindBuilder;
